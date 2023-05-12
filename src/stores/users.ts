import { defineStore } from "pinia";
import axios from "axios";
import { User } from "@/interfaces/user";
export const useUserStore = defineStore("user", {
  state: () => ({
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
    ] as User[]
  }),
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  actions: {
    async fetchUsers() {
      try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.users = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
