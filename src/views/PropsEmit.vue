<template>
  <div>Props Emit Slots, template send data</div>
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
      <h1>header</h1>
    </template>

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
const idUser = ref(4);

const catchChildData = (childData: any) => {
  console.log(childData);
  //
};
</script>

<style scoped></style>
