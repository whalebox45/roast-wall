<template>
  <div class="p-4 my-2 border rounded shadow-sm">
    <p class="text-lg">{{ roast.text }}</p>
    <div class="flex gap-4 mt-2">
      <button @click="roast.likes++" class="text-green-600">👍 {{ roast.likes }}</button>
      <button @click="roast.dislikes++" class="text-red-600">👎 {{ roast.dislikes }}</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["roast"]);
</script>
