<template>
  <div>Details info</div>
  <div>params {{ params }}</div>
  <button @click="goToRouterChild">go to router child</button>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();

const { params } = useRoute();

const goToRouterChild = () => {
  router.push({
    name: "routerchild"
    // params: { id: item.id }
  });
};
</script>

<style scoped></style>
