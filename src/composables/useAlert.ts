import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";

export const useAlertComposable = () => {
  console.log();

  const displaySuccesAlert = (message: string) => {
    Swal.fire({
      text: message,
      icon: "success",
      buttonsStyling: false,
      confirmButtonText: "ok",
      heightAuto: false,
      customClass: {
        confirmButton: "btn fw-semibold btn-primary"
      }
    });
  };
  const displayDangerAlert = (message: string) => {
    Swal.fire({
      text: message,
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "ok",
      heightAuto: false,
      customClass: {
        confirmButton: "btn btn-danger"
      }
    });
  };

  return { displayDangerAlert, displaySuccesAlert };
};
