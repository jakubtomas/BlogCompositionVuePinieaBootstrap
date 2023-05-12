<template>
  <div class="home">
    <h1>Hello Welcome to Blog website</h1>
    <p>Use navigation for next adventure</p>
    <p>Created by Jakub Tomas</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    const refreshCount = ref(0);
    const parentData = ref("Parent Data");

    return { parentData, refreshCount };
  }
});
</script>

<style scoped></style>
