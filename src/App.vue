<template>
  <div class="container mx-auto p-4">
    <!-- 這裡是全局樣式和頁面的佈局 -->
    <header class="text-center mb-6">
      <h1 class="text-3xl font-bold text-blue-500">🔥 Roast Wall</h1>
      <p class="text-lg text-gray-700">匿名吐槽，隨心而發</p>
    </header>
    
    <!-- 路由視圖，動態顯示不同的頁面 -->
    <router-view />
  </div>
</template>

<script setup>
// 目前不需要額外的腳本配置，後續可以引入全局狀態或其他功能
</script>

<style scoped>
/* 你可以在這裡寫一些全局樣式 */
</style>
