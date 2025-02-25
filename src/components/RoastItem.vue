<template>
  <div class="p-4 my-2 border rounded shadow-sm">
    <p class="text-lg">{{ roast.text }}</p>
    <div class="flex gap-4 mt-2">
      <button @click="likeRoast" class="text-green-600">👍 {{ roast.likes }}</button>
      <button @click="dislikeRoast" class="text-red-600">👎 {{ roast.dislikes }}</button>
    </div>
  </div>
</template>

<script setup>
import { useRoastStore } from '@/store/roastStore';  // 引入 Pinia store

// 這裡要解構 props，正確接收 `roast` 資料
const props = defineProps({
  roast: Object
});

const roastStore = useRoastStore();  // 使用 store

const likeRoast = () => {
  roastStore.likeRoast(props.roast.id);  // 使用 props 中的 `roast`
};

const dislikeRoast = () => {
  roastStore.dislikeRoast(props.roast.id);  // 使用 props 中的 `roast`
};
</script>
