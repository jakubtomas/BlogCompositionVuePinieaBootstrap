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
      <code class="card-title">below here are data in slots</code>
      <br />
      <slot><!-- slots without name--></slot>
      Props parameter from parent {{ idUser }}
      --------------
      <br />
      <br />
      <button @click="clickButton('parameterh')">{{ buttonText }}</button>

      <slot name="buttonSlots"><!-- slots with name  --></slot>

      <!-- posielam property source do parent pomcou v bind -->
      <slot name="caption" v-bind:source="source">hello{{ source }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
// this component is only for learning
// note recomenedetion to use for app , you have card.vue for this
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

const source = ref(" string from child reactive i think");

//send data to parent
const clickButton = (parameter: string) => {
  const mockData = " Hello";
  emit("sendMessageToParent", parameter);
};
</script>

<style scoped></style>
