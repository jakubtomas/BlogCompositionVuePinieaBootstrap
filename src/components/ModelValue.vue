<template>
  <div class="child">
    <p>Model Value.vue component</p>
    <!-- data modelValue dostanem pomocou props -->
    <input type="text" :value="modelValue" @input="updateValueFunction" v-bind="$attrs" />
    <h3>Parent value {{ modelValue }}</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: [String, Object, Number] }
});

const emit = defineEmits(["update:modelValue"]);

const updateValueFunction = (event: any) => {
  console.log(event.target.value);
  // akutilazacia dat
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped>
.child {
  width: 50%;
  border: 3px solid green;
  margin: 10px;
  background-color: #7adbae;
}
p {
  padding: 10px;
}
</style>
