// Define a composable component
import { ref } from "vue";

export function useDateFunction() {
  function formatDate(unixTimestamp: number | undefined): string {
    if (!unixTimestamp) {
      return "";
    }

    const formattedDate = ref("");
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);

    const year = dateObject.getFullYear();
    const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObject.getDate()).slice(-2);
    const hours = ("0" + dateObject.getHours()).slice(-2);
    const minutes = ("0" + dateObject.getMinutes()).slice(-2);
    const seconds = ("0" + dateObject.getSeconds()).slice(-2);

    return (formattedDate.value =
      year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds);
  }

  function returnDate(): number {
    const date = new Date();
    return Math.floor(date.getTime() / 1000) as number;
  }
  return { formatDate, returnDate };
}
