<template>
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
          <ul class="list-group">
            <li
              v-for="(todo, index) in store.getTodoItems"
              :key="index"
              class="list-group-item"
              @click="selectItem(todo.id)">
              {{ todo.title }}
            </li>
          </ul>
        </div>
        <div class="col-8">
          <div class="card" v-if="selectedTodoItem?.title">
            <div class="card-header d-flex justify-content-around align-items-center">
              {{ selectedTodoItem?.title }}
              <div class="buttons">
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="updateVisibilityForm()"
                  v-if="!visibleEditFrom">
                  update
                </button>

                <button
                  type="button"
                  class="btn btn-warning"
                  @click="updateVisibilityForm()"
                  v-if="visibleEditFrom">
                  close
                </button>

                <button
                  type="button"
                  class="btn btn-danger"
                  @click="updateVisibilityPopUpMessage()">
                  delete
                </button>
              </div>
            </div>
            <div class="card-body">
              <div v-if="!visibleEditFrom">
                <h5 class="card-title">{{ selectedTodoItem?.title }}</h5>
                <p class="card-text">
                  {{ selectedTodoItem?.text }}
                </p>
              </div>
              <!-- edit Form -->

              <div v-if="visibleEditFrom">
                <form @submit.prevent="updateForm" class="container mt-4">
                  <div class="mb-3">
                    <label for="name" class="form-label">Title</label>
                    <input
                      v-model="selectedTodoItem.title"
                      type="text"
                      id="name"
                      class="form-control"
                      required />
                  </div>

                  <div class="mb-3">
                    <label for="message" class="form-label">Text</label>
                    <textarea
                      v-model="selectedTodoItem.text"
                      id="message"
                      class="form-control"
                      required></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTodoStore } from "@/stores/todo";
import { todoItem } from "@/interfaces/todoItem";
import { useAlertComposable } from "@/composables/useAlert";

const router = useRouter();
const store = useTodoStore();
const alert = useAlertComposable();

//const selectetItem = ref({});

// const todoItems = computed<todoItem[]>(() => {
//   return store.getTodoItems;
// });

const selectedTodoItem = ref<todoItem | undefined>({} as todoItem);
const visibleEditFrom = ref(false);
const isPopupVisible = ref(false);
const { params } = useRoute();

onMounted(async () => {
  await store.fetchTodoItems();
});

const selectItem = (id: string) => {
  selectedTodoItem.value = store.getOneItem(id);
};

const updateVisibilityForm = () => {
  visibleEditFrom.value = !visibleEditFrom.value;
};

const updateVisibilityPopUpMessage = () => {
  isPopupVisible.value = !isPopupVisible.value;
};

const displayFormAddItem = () => {
  //
};
const showAlert = () => {
  alert.displaySuccesAlert("hello world");
};

const updateForm = () => {
  // update
  const object: todoItem = {
    id: selectedTodoItem.value?.id || "",
    todoId: selectedTodoItem.value?.todoId || "",
    done: false,
    date: selectedTodoItem.value?.date || 55555,
    title: selectedTodoItem.value?.title || "",
    text: selectedTodoItem.value?.text || ""
  };

  store.updateTodoItem(object);
};

const deleteTodoItem = () => {
  const idTodoItem = selectedTodoItem.value?.id || "";

  if (idTodoItem) {
    store.deleteTodoItem(parseInt(idTodoItem as string));
  }
  updateVisibilityPopUpMessage();
};

const redirectToCreateBlog = (): void => {
  router.push("/addBlog");
};
const redirectToDetailsBlog = (todoItem: string): void => {
  router.push("/addBlog");
};
</script>

<style scoped>
li:hover {
  cursor: pointer;
  background-color: #8de4ef;
}
button {
  margin: 3px;
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
