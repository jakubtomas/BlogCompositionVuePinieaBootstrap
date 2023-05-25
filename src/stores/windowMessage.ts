import { defineStore } from "pinia";
import { todoItem } from "@/interfaces/todoItem";
import axios, { AxiosError } from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    ApiAddress: "https://629e64f33dda090f3c191498.mockapi.io/todos/",
    todoItems: [] as todoItem[]
  }),
  getters: {},
  actions: {}
});
