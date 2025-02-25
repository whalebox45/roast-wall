import { defineStore } from 'pinia';

export const useRoastStore = defineStore('roast', {
  state: () => ({
    roasts: [
      { id: 1, text: 'Vue 3 比 Vue 2 強多了！', likes: 10, dislikes: 2 },
      { id: 2, text: '前端學無止境，太折磨人了……', likes: 5, dislikes: 1 }
    ],
  }),
  actions: {
    addRoast(newRoast) {
      this.roasts.push({
        id: Date.now(),
        text: newRoast,
        likes: 0,
        dislikes: 0,
      });
    },
    likeRoast(roastId) {
      const roast = this.roasts.find(r => r.id === roastId);
      if (roast) roast.likes++;
    },
    dislikeRoast(roastId) {
      const roast = this.roasts.find(r => r.id === roastId);
      if (roast) roast.dislikes++;
    }
  }
});
