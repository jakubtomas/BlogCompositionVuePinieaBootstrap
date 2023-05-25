import { defineStore } from "pinia";
import { todoItem } from "@/interfaces/todoItem";
import axios, { AxiosError } from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    ApiAddress: "https://629e64f33dda090f3c191498.mockapi.io/todos/",
    todoItems: [] as todoItem[]
  }),
  getters: {
    getTodoItems(state): todoItem[] {
      return state.todoItems;
    },
    getOneItem(state): any {
      return (idItem: string) => {
        return state.todoItems.filter((item) => item.id == idItem)[0];
      };
    },
    getOneTodoItem:
      (state) =>
      (id: string): todoItem | undefined => {
        return state.todoItems.find((item) => item.id === id);
      }
  },
  actions: {
    async fetchTodoItems() {
      this.todoItems = {} as todoItem[];

      try {
        const { data } = await axios.get(this.ApiAddress + "2/item");
        this.todoItems = data;
      } catch (response) {
        const error = response as AxiosError<any>;
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
    async updateTodoItem(newData: todoItem) {
      try {
        const { data } = await axios.put(
          this.ApiAddress + "2/item/" + newData.id,
          newData
        );

        alert("success update item");
        this.fetchTodoItems();
      } catch (response) {
        const error = response as AxiosError<any>;
        console.log(error);
      }
    },
    async deleteTodoItem(idItem: number) {
      try {
        const response = await axios.delete(this.ApiAddress + "2/item/" + idItem);
        console.log("success delete item");

        alert("success delete item");
        this.fetchTodoItems();

        console.log(response);
      } catch (response) {
        const error = response as AxiosError<any>;
        console.log(error);
      }
    }
  }
});
