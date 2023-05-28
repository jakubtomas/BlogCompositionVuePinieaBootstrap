<template>
  <div>
    <Card>
      <template #cardTitleSlot> add todo item </template>

      <template #cardToolbarSlot>
        <button>Save</button>
      </template>

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
import * as yup from "yup";

const emit = defineEmits(["sendMessageToParent"]);
const title = ref();
const text = ref();

const titleName = ref("mockTitleName");

const validationSchema = yup.object().shape({
  title: yup.string().required("Please enter a title").max(60),
  text: yup.string().required("Please enter some text").max(250)
});

const addTodoItem = () => {
  //
  const newTodoItem = {
    id: Math.floor(Math.random() * (100000 - 5 + 1) + 5),
    author: "Peter3",
    category: "sport",
    title: title.value,
    text: text.value
  };

  // add todo item ulozisko function
};

// const clickButton = (parameter: string) => {
//   const mockData = " Hello";
//   emit("sendMessageToParent", parameter);
// };
</script>

<style scoped></style>
