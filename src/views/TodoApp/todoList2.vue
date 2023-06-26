<template>
  <code>Todo app s PInia ale s inym typom uloziskoa pomocou computed property</code>
  <div class="pop">
    <div v-if="isPopupVisible" class="popup">
      <div class="popup-message">
        <div class="alert alert-danger" role="alert">Are you sure delete this Item ?</div>
      </div>
      <div class="d-flex justify-content-around">
        <button class="btn btn-secondary" @click="updateVisibilityPopUpMessage">
          Close
        </button>
        <button class="btn btn-info" @click="deleteTodoItem">Yes delete Item</button>
      </div>
    </div>
  </div>

  <div>
    <h2>this is todo app</h2>

    <div class="container-xl">
      <div class="row">
        <div class="col-4">
          <button type="button" class="btn btn-primary" @click="displayFormAddItem()">
            Add Item
          </button>

          <h6>Todo Items List below</h6>
          <ul class="list-group">
            <li
              v-for="(todo, index) in store.getTodoItems"
              :key="index"
              class="list-group-item"
              @click="selectItem(todo.id)">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="todo.done"
                @click="updateDoneStatus(todo.id, !todo.done)" />
              {{ todo.id }} {{ todo.title }}
            </li>
          </ul>
        </div>
        <div class="col-8 right-side">
          <DetailsTodoItem
            v-if="selectedTodoItem?.title"
            :todo-item="selectedTodoItem"
            @resetSelectedItem="resetSelectedTodoItem">
          </DetailsTodoItem>

          <AddTodoItemForm v-if="visibleAddForm"></AddTodoItemForm>
        </div>
      </div>
    </div>
    <div>sleduj tvoje data kamo : {{ todoItemsComputed }}</div>
    <!--  -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import AddTodoItemForm from "@/components/TodoApp/addTodoItemForm.vue";
import DetailsTodoItem from "@/components/TodoApp/detailsTodoItem.vue";

import { todoItem } from "@/interfaces/todoItem";
import { useAlertComposable } from "@/composables/useAlert";

import { useTodo2Store } from "@/stores/todo2";
import { useDateFunction } from "@/composables/dateFunctions";

const store = useTodo2Store();
const dateFunctions = useDateFunction();

const todoItemsComputed = computed(() => store.todoItems);

const selectedTodoItem = ref<todoItem | undefined>({} as todoItem);
const visibleAddForm = ref(false);
const isPopupVisible = ref(false);

onMounted(async () => {
  await store.fetchTodoItems();
});

const selectItem = (id: string) => {
  //selectedTodoItem.value = store.getOneItem(id);
  visibleAddForm.value = false;
};

const resetSelectedTodoItem = () => {
  selectedTodoItem.value = undefined;
};

const updateVisibilityPopUpMessage = () => {
  isPopupVisible.value = !isPopupVisible.value;
};

const displayFormAddItem = () => {
  visibleAddForm.value = true;
  selectedTodoItem.value = undefined;
};

const updateDoneStatus = (idTodoItem: string, status: boolean) => {
  const object: any = {
    id: parseInt(idTodoItem as string),
    done: status,
    date: dateFunctions.returnDate()
  };

  //store.updateTodoItem(object);
};

const deleteTodoItem = () => {
  const idTodoItem = selectedTodoItem.value?.id || "";

  if (idTodoItem) {
    // store.deleteTodoItem(idTodoItem);
  }
  updateVisibilityPopUpMessage();
};
</script>

<style scoped>
li:hover {
  cursor: pointer;
  background-color: #8de4ef;
}
button {
  margin-bottom: 5px;
}
.right-side {
  margin-top: 50px;
}
.text {
  text-align: justify;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #3b3b3bee;
  padding: 25px;
  z-index: 9999 !important;
  border-radius: 10px;
}

.popup-message {
  margin-bottom: 16px;
}
</style>
