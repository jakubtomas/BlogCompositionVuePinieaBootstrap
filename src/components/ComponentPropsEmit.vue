<template>
  <code> child component props emit </code>
  <div></div>
</template>

<script setup lang="ts">
const emit = defineEmits(["sendMessageToParent"]);

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  idUser: {
    type: String,
    required: true
  }
});
</script>

<style scoped></style>
