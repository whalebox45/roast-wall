<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">🔥 Roast Wall</h1>
    <RoastForm @addRoast="addRoast" />
    <RoastList :roasts="roasts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RoastForm from "@/components/RoastForm.vue";
import RoastList from "@/components/RoastList.vue";

const roasts = ref([
  { id: 1, text: "Vue 3 比 Vue 2 猛！", likes: 10, dislikes: 2 },
  { id: 2, text: "前端好麻煩", likes: 5, dislikes: 1 },
]);

const addRoast = (newRoast) => {
  roasts.value.push({
    id: Date.now(),
    text: newRoast,
    likes: 0,
    dislikes: 0,
  });
};
</script>
