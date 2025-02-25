<template>
  <div class="mt-4">
    <RoastItem v-for="roast in roasts" :key="roast.id" :roast="roast" />
  </div>
</template>

<script setup>
import RoastItem from "./RoastItem.vue";
defineProps(["roasts"]);
</script>
