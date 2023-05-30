import { defineStore } from "pinia";
import { todoItem } from "@/interfaces/todoItem";
import axios, { AxiosError } from "axios";
import { useWindowMessages } from "@/stores/windowMessage";
import { useAlertComposable } from "@/composables/useAlert";
import { useDateFunction } from "@/composables/dateFunctions";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    ApiAddress: "https://629e64f33dda090f3c191498.mockapi.io/todos/",
    todoItems: [] as todoItem[]
  }),
  getters: {
    getTodoItems(state): todoItem[] {
      return state.todoItems;
    },

    // this is working from project
    // getOneItem(state): any {
    //   return (idItem: string) => {
    //     return state.todoItems.filter((item) => item.id == idItem)[0];
    //   };
    // }

    // better from chatgppt
    getOneItem:
      (state) =>
      (idItem: string): todoItem | undefined => {
        return state.todoItems.find((item) => item.id === idItem);
      }
  },
  actions: {
    async fetchTodoItems() {
      const storeWindowMessage = useWindowMessages();

      this.todoItems = {} as todoItem[];

      try {
        const { data } = await axios.get(this.ApiAddress + "2/item");

        this.todoItems = data;

        // use function for format date composable

        // this.todoItems = this.todoItems.map((object) => {
        //   return { ...object, date: dateFormatter.formatDate(object.date) };
        // });
      } catch (response) {
        const error = response as AxiosError<any>;
        console.log(error);

        useWindowMessages().addNewMessage("you got error", { type: "danger" });
        storeWindowMessage.addNewMessage("The Todo list has not been loaded correctly.", {
          type: "danger"
        });
      }
    },
    async fetchOneItem() {
      this.todoItems = {} as todoItem[];

      try {
        const { data } = await axios.get(this.ApiAddress + "2/item");
        this.todoItems = data;
      } catch (response) {
        const error = response as AxiosError<any>;
      }
    },
    async addNewTodoItem(newItem: any) {
      const storeWindowMessage = useWindowMessages();

      try {
        const { data } = await axios.post(this.ApiAddress + "2/item", newItem);
        console.log(data);
        storeWindowMessage.addNewMessage("Item has been created.", {
          type: "success"
        });
        this.fetchTodoItems();
      } catch (response) {
        const error = response as AxiosError<any>;

        storeWindowMessage.addNewMessage("Item has been not created.Try again", {
          type: "danger"
        });
      }
    },
    async updateTodoItem(newData: todoItem) {
      const alert = useAlertComposable();

      try {
        const { data } = await axios.put(
          this.ApiAddress + "2/item/" + newData.id,
          newData
        );

        useWindowMessages().addNewMessage("updated success", { type: "success" });
        alert.displaySuccesAlert("Item has been updated");
        if (data) {
          this.fetchTodoItems();
        }
      } catch (response) {
        const error = response as AxiosError<any>;
        console.log(error);
      }
    },

    async deleteTodoItem(idItem: string) {
      const storeWindowMessage = useWindowMessages();
      const alert = useAlertComposable();
      try {
        const response = await axios.delete(this.ApiAddress + "2/item/" + idItem);

        if (response.status === 200) {
          console.log("success delete item 200");
          alert.displaySuccesAlert("Item has been deleted");
          storeWindowMessage.addNewMessage("Todo item has been deleted successfully", {
            type: "success"
          });

          this.fetchTodoItems();
        }
      } catch (response) {
        const error = response as AxiosError<any>;
        alert.displayDangerAlert("Item has been not deleted.Try again");
        storeWindowMessage.addNewMessage("Item has been not deleted.Try again", {
          type: "danger"
        });
      }
    }
  }
});
