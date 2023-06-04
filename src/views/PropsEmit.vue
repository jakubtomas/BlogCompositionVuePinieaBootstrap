<template>
  <div>Props Emit Slots, template send data</div>

  <code> posielanie input parametre, </code>
  <CardComponent
    @send-message-to-parent="catchChildData"
    :title="'Title text'"
    :button-text="buttonTextRef"
    :id-user="'4'"
    >Value for slot
    <!-- 
    <template v-slot:buttonSlots>
      <br />
      <button>template button</button>
    </template> -->
    <template #buttonSlots>
      <br />
      <h4>slots buttonSlots</h4>
    </template>

    <!-- source su data s slots  string source child -->
    <template #caption="{ source }">
      <br />
      <button>template button {{ source }}</button>
    </template>
  </CardComponent>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import { ref } from "vue";

const buttonTextRef = ref("send button parent");

const catchChildData = (childData: any) => {
  console.log(childData);
  //
};
</script>

<style scoped></style>
