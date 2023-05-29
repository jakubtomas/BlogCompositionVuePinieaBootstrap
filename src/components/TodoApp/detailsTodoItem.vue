<template>
  <div>
    {{ props.todoItem }}
    <Card>
      <template #cardTitleSlot> {{ props.todoItem?.title }} </template>

      <template #cardToolbarSlot>
        <button
          type="button"
          class="btn btn-warning"
          @click="updateVisibilityEditForm()"
          v-if="!visibleEditForm">
          update
        </button>

        <button
          type="button"
          class="btn btn-warning"
          @click="updateVisibilityEditForm()"
          v-if="visibleEditForm">
          close
        </button>

        <button type="button" class="btn btn-danger" @click="displayPopUpMessage()">
          delete
        </button>
      </template>

      <template #cardBodySlot>
        <div v-if="!visibleEditForm">
          <h5 class="card-title">Title: {{ props.todoItem?.title }}</h5>
          <p class="card-text">Text: {{ props.todoItem?.text }}</p>
        </div>

        <VForm
          v-if="visibleEditForm"
          @submit="updateTodoItem"
          :validation-schema="validationSchema">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Title
              {{ props.todoItem?.title }}
            </label>
            <Field
              type="text"
              class="form-control form-control-solid"
              placeholder="Title"
              name="title"
              v-model="title" />

            <div class="error">
              <ErrorMessage name="title" />
            </div>
          </div>
          <!--  -->
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Text</label>
            <Field
              type="textarea"
              as="textarea"
              rows="3"
              class="form-control form-control-solid"
              placeholder="write text"
              name="text"
              v-model="text" />

            <div class="error">
              <ErrorMessage name="text" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary my-2">Update blog</button>
        </VForm>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/CardGeneral.vue";
import { defineEmits, defineProps, ref, type PropType, computed, watch } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as yup from "yup";
import { todoItem } from "@/interfaces/todoItem";
import Swal from "sweetalert2";
import { useTodoStore } from "@/stores/todo";

const props = defineProps({
  title: {
    type: String,
    required: false
  },
  todoItem: { type: Object as PropType<todoItem | undefined> }
});

const emit = defineEmits(["resetSelectedItem"]);

const store = useTodoStore();

const todoItemEdit = ref<todoItem>({} as todoItem);

const title = ref("");
const text = ref("");

console.log();

const visibleEditForm = ref(false);

const validationSchema = yup.object().shape({
  title: yup.string().required("Please enter a title").max(60),
  text: yup.string().required("Please enter some text").max(250)
});

const updateVisibilityEditForm = () => {
  visibleEditForm.value = !visibleEditForm.value;

  //emit("updateVisibilityForm");
};

const displayPopUpMessage = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const idTodoItem = props.todoItem?.id || "";
      if (idTodoItem) {
        store.deleteTodoItem(idTodoItem);
        emit("resetSelectedItem");
      }
    }
  });
};

const updateTodoItem = () => {
  //const object: todoItem = {
  const object: any = {
    id: parseInt(todoItemEdit.value.id as string) || "",
    todoId: todoItemEdit.value.todoId,
    done: false,
    date: todoItemEdit.value.date,
    title: title.value,
    text: text.value
  };

  store.updateTodoItem(object);
};
watch(
  () => props.todoItem,
  (newProps) => {
    console.log("Props Updated:", newProps);

    // todo skontrolovat priradnie pre funkciu update todo item
    todoItemEdit.value = newProps || ({} as todoItem);
    title.value = newProps?.title || "";
    text.value = newProps?.text || "";
  }
);
</script>

<style scoped>
button {
  margin: 3px;
}
</style>
