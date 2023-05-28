<template>
  <div class="card">
    <div class="card-header d-flex justify-content-around align-items-center">
      <h3 class="card-title">
        <slot name="cardTitleSlot"></slot>
      </h3>
      <div class="card-toolbar">
        <slot name="cardToolbarSlot"></slot>
      </div>
    </div>

    <div class="card-body">
      <slot name="cardBodySlot"><!-- optional fallback --></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";

const emit = defineEmits(["sendMessageToParent"]);

const props = defineProps({
  title: {
    type: String,
    required: false
  }
});

const source = ref("source child ");

const clickButton = (parameter: string) => {
  const mockData = " Hello";
  emit("sendMessageToParent", parameter);
};
</script>

<style scoped></style>
