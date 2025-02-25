<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">🔥 Roast Wall</h1>
    <RoastForm @addRoast="addRoast" />
    <RoastList :roasts="roasts" />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';  // 引入 computed
import { useRoastStore } from '@/store/roastStore';  // 引入 Pinia store
import RoastForm from '@/components/RoastForm.vue';
import RoastList from '@/components/RoastList.vue';

const roastStore = useRoastStore();  // 使用 store

// 使用 computed 來處理 roasts，這樣就能確保視圖更新
const roasts = computed(() => roastStore.roasts);  // 從 store 獲取 roasts

onMounted(() => {
  console.log("Fetching roasts...");
  roastStore.fetchRoasts();  // 在組件加載時拉取數據
});

const addRoast = (newRoast) => {
  roastStore.addRoast(newRoast);  // 使用 store 的方法新增吐槽
};
</script>
