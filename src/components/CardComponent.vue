<template>
  <div class="card">
    <div class="card-header d-flex justify-content-around align-items-center">
      <h3 class="card-title">Title:{{ title }}</h3>
      <div class="card-toolbar">
        <button type="button" class="btn btn-warning btn-sm mx-2">Edit Blog</button>

        <button type="button" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>

    <div class="card-body">
      <h5 class="card-title">below here slots</h5>
      <slot><!-- optional fallback --></slot>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      {{ idUser }}
      <button @click="clickButton('parameterh')">{{ buttonText }}</button>

      <slot name="buttonSlots"><!-- optional fallback --></slot>

      <slot name="caption" v-bind:source="source">hello{{ source }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";

const emit = defineEmits(["sendMessageToParent"]);

const props = defineProps({
  title: {
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

const source = ref("source child ");

const clickButton = (parameter: string) => {
  const mockData = " Hello";
  emit("sendMessageToParent", parameter);
};
</script>

<style scoped></style>
