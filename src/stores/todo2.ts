import { ref } from "vue";
import { defineStore } from "pinia";
import { todoItem } from "@/interfaces/todoItem";
import axios, { AxiosError } from "axios";

export const useTodo2Store = defineStore("todo2", () => {
  const todoItems = ref<todoItem[]>([]);
  const apiAddress = ref("https://629e64f33dda090f3c191498.mockapi.io/todos/");

  const fetchTodoItems = async () => {
    //  const storeWindowMessage = useWindowMessages();

    todoItems.value = {} as todoItem[];

    try {
      const { data } = await axios.get(apiAddress.value + "2/item");
      todoItems.value = data;
      console.log(data);
    } catch (response) {
      const error = response as AxiosError<any>;
      console.log(error);

      // useWindowMessages().addNewMessage("you got error", { type: "danger" });
      // storeWindowMessage.addNewMessage("The Todo list has not been loaded correctly.", {
      //   type: "danger"
      // });
    }
  };

  return {
    fetchTodoItems,
    todoItems
  };
});
