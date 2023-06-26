<template>
  <div>Props Emit Slots, template send data</div>

  <code>
    posielanie input parametre, Preposielanie dat s child componentu , slots posielanie
    data do casit componentu , pouzitie v bind source na vratenie dat do rodica
  </code>
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
      <br />
      v-bind source data {{ source }}
    </template>
  </CardComponent>

  child data are :{{ childComponentData }}
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import { ref } from "vue";

const buttonTextRef = ref("send button parent");

const childComponentData = ref("");
const catchChildData = (childData: any) => {
  console.log(childData);

  childComponentData.value = childData;
};
</script>

<style scoped></style>
