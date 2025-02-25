import { defineStore } from 'pinia';
import { db, collection, getDocs, addDoc, updateDoc, doc } from '@/firebase';  // 引入 Firebase
import { onSnapshot } from "firebase/firestore";

export const useRoastStore = defineStore('roast', {
  state: () => ({
    roasts: [],
  }),
  actions: {
    // 從 Firestore 獲取吐槽數據
    async fetchRoasts() {
      try {
        const querySnapshot = await getDocs(collection(db, "roasts"));
        console.debug("Fetched roasts:", querySnapshot.docs.map(doc => doc.data()));  // 確認資料已加載
    
        // 先從 Firestore 拉取一次資料
        this.roasts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    
        // 然後使用 onSnapshot 實現資料的即時同步
        onSnapshot(collection(db, "roasts"), (snapshot) => {
          console.debug("Realtime roasts:", snapshot.docs.map(doc => doc.data()));  // 實時打印資料
          this.roasts = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        });
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    },
    // 向 Firestore 新增吐槽
    async addRoast(newRoast) {
      try {
        const docRef = await addDoc(collection(db, "roasts"), {
          text: newRoast,
          likes: 0,
          dislikes: 0
        });
        this.roasts.push({ text: newRoast, likes: 0, dislikes: 0, id: docRef.id });
      } catch (error) {
        console.error("Error adding document to Firestore: ", error);
      }
    },
    // 更新 Firestore 中的點讚數
async likeRoast(roastId) {
  const roast = this.roasts.find(r => r.id === roastId);  // 先取得當前的 roast
  if (roast) {
    const roastDoc = doc(db, "roasts", roastId);
    await updateDoc(roastDoc, {
      likes: roast.likes + 1
    });

    // 為了防止onSnapshot影響，先等更新完成後再修改本地的數據
    roast.likes++;  // 本地資料更新
  }
},

// 更新 Firestore 中的點踩數
async dislikeRoast(roastId) {
  const roast = this.roasts.find(r => r.id === roastId);  // 先取得當前的 roast
  if (roast) {
    const roastDoc = doc(db, "roasts", roastId);
    await updateDoc(roastDoc, {
      dislikes: roast.dislikes + 1
    });

    // 為了防止onSnapshot影響，先等更新完成後再修改本地的數據
    roast.dislikes++;  // 本地資料更新
  }
}
  }
});
