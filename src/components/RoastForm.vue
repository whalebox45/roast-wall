<template>
  <form @submit.prevent="submitRoast" class="mt-4">
    <input
      v-model="newRoast"
      placeholder="吐槽吧..."
      class="w-full p-2 border rounded"
    />
    <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
      送出
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const newRoast = ref("");
const emit = defineEmits(["addRoast"]);

const submitRoast = () => {
  if (newRoast.value.trim()) {
    emit("addRoast", newRoast.value.trim());
    newRoast.value = "";
  }
};
</script>
