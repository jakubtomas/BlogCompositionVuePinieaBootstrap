<template>
  <div>
    <Card>
      <template #cardTitleSlot> add todo item </template>

      <template #cardToolbarSlot> </template>

      <template #cardBodySlot>
        <VForm @submit="addTodoItem" :validation-schema="validationSchema">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tittle</label>
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
          <button type="submit" class="btn btn-primary my-2">Create new blog</button>
        </VForm>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/CardGeneral.vue";
import { defineEmits, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useTodoStore } from "@/stores/todo";
import * as yup from "yup";

const store = useTodoStore();
const title = ref();
const text = ref();

const validationSchema = yup.object().shape({
  title: yup.string().required("Please enter a title").max(60),
  text: yup.string().required("Please enter some text").max(250)
});

const addTodoItem = (): void => {
  const newTodoItem = {
    id: Math.floor(Math.random() * (100000 - 5 + 1) + 5),
    date: 1685095164,
    todoId: 2,
    done: false,
    title: title.value,
    text: text.value
  };

  store.addNewTodoItem(newTodoItem);
};
</script>

<style scoped></style>
