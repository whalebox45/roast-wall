<!-- components/RoastList.vue -->
<template>
  <div class="mt-4">
    <RoastItem 
      v-for="roast in roasts" 
      :key="roast.id" 
      :roast="roast" 
      :to="`/roast/${roast.id}`" />  <!-- 使用 :to 來創建路由鏈接 -->
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import RoastItem from "./RoastItem.vue";

defineProps(["roasts"]);
</script>