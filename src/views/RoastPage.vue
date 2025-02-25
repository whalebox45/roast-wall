<!-- views/RoastPage.vue -->
<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold">🔥 Roast Details</h1>
      <div v-if="roast">
        <p class="text-lg">{{ roast.text }}</p>
        <p>👍 Likes: {{ roast.likes }}</p>
        <p>👎 Dislikes: {{ roast.dislikes }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRoastStore } from '@/store/roastStore';
  
  const route = useRoute();  // 用於獲取路由參數
  const roastStore = useRoastStore();  // 使用 store
  const roast = ref(null);
  
  onMounted(() => {
    const roastId = route.params.id;  // 從路由中獲取 id
    const foundRoast = roastStore.roasts.find(r => r.id === roastId);
    if (foundRoast) {
      roast.value = foundRoast;
    }
  });
  </script>
  