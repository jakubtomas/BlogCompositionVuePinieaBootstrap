<template>
  <div class="home">
    <p>basic component with script setup</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const refreshCount = ref(0);
const parentData = ref("Parent Data");
</script>

<style scoped></style>
