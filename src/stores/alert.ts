import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface Alert {
  message: string;
  type: "alert-success" | "alert-danger";
}

export const alertStore = defineStore("alert", () => {
  const alert = ref<Alert | null>(null as Alert | null);

  const getAlert = computed(() => alert.value);

  function setSuccess(newMessage: string): void {
    alert.value = { message: newMessage, type: "alert-success" };
    setTimeout(clearAlert, 5000);
  }

  function setError(newMessage: string): void {
    alert.value = { message: newMessage, type: "alert-danger" };
    setTimeout(clearAlert, 5000);
  }

  function clearAlert() {
    alert.value = null;
  }

  return {
    clearAlert,
    getAlert,
    setSuccess,
    setError
  };
});
