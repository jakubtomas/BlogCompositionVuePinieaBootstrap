<template>
  <div class="parent">
    <p>Parent Vmodelmodelvalue.vue</p>
    <h3>What is name {{ name }}</h3>
    <!--  -->
    <code>
      {{ name }}
    </code>
    <!-- center element  -->
    <div class="d-flex align-items-center justify-content-center">
      <!-- prepojenie v model cez hodnotu name , property name  -->
      <ModelValue v-model="name"></ModelValue>
    </div>

    <!--  -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModelValue from "@/components/ModelValue.vue";

const name = ref("Harry Potter");
// a
</script>

<style scoped>
.parent {
  border: 1px solid blue;
  background-color: #92d5f6;
}
p {
  padding: 10px;
}
</style>
