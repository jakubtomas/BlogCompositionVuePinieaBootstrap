import { defineStore } from "pinia";

export interface typeMessage {
  type: "danger" | "success" | "warning" | "info";
}
export const useWindowMessages = defineStore("messages", {
  state: () => ({
    type: "info",
    messages: [] as string[]
  }),
  getters: {
    getMessages(state): string[] {
      return state.messages;
    },
    getTypeMessage(state): string {
      return state.type;
    }
  },
  actions: {
    addNewMessage(message: string, typeMessage: typeMessage): void {
      //reset values

      this.messages = [];
      this.type = "";

      this.messages.push(message);
      this.type = typeMessage.type;
      this.resetStoreMessages();
    },

    resetStoreMessages() {
      const startTime = performance.now();

      setTimeout(() => {
        this.messages = [];

        // Stop the timer
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;

        // Print the elapsed time
        console.log(`Elapsed time: ${elapsedTime} milliseconds`);
      }, 5000);
    }
  }
});
