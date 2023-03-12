<template>
  <div v-if="alert" class="container">
    <div class="m-2">
      <div class="alert alert-dismissable" :class="alert.type">
        <button @click="alertS.clearAlert()" class="btn btn-link close">&times;</button>
        {{ alert.message }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { alertStore } from "@/stores/alert";

interface Alert {
  message: string;
  type: "alert-success" | "alert-danger";
}

export default defineComponent({
  name: "alert-component",
  components: {},
  setup() {
    const alertS = alertStore();

    let alert = ref<Alert | null>({} as Alert);
    alert = computed(() => alertS.getAlert);

    return {
      alert,
      alertS
    };
  }
});
</script>
