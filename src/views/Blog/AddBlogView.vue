<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2">Add new bloog</h1>
        <VForm @submit="addBlog" :validation-schema="validationSchema">
          <div class="mb-3">
            <!-- <label for="exampleFormControlInput1" class="form-label">Tittle</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              placeholder="Title"
              name="title"
              v-model="title" />

            <div class="error">
              <ErrorMessage name="title" />
            </div>
          -->
            <!-- prepojenie hodnoty cez v model  -->
            <InputComponent name="title" label="title" v-model="title" />
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
        <!-- LIST -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useBlogStore } from "@/stores/blog";
//src\components\Form\FormInput.vue
import InputComponent from "@/components/Form/FormInput.vue";

import { ErrorMessage, Field, Form as VForm } from "vee-validate";

import { Blog } from "@/interfaces/blog";
import * as yup from "yup";

export default defineComponent({
  name: "AddBlogView",
  components: {
    ErrorMessage,
    Field,
    VForm,
    InputComponent
  },
  setup() {
    const router = useRouter();
    const store = useBlogStore();
    const title = ref("");
    const text = ref("");
    const blogs = ref<Blog[]>([] as Blog[]);

    const validationSchema = yup.object().shape({
      title: yup.string().required("Please enter a title").max(60),
      text: yup.string().required("Please enter some text").max(250)
    });

    const addBlog = () => {
      const newBlog = {
        id: Math.floor(Math.random() * (100000 - 5 + 1) + 5),
        author: "Peter3",
        category: "sport",
        title: title.value,
        text: text.value
      };
      console.log(newBlog);
      return;
      store.addBlog(newBlog);
      router.push("/blog");
    };

    return {
      store,
      blogs,
      title,
      text,
      addBlog,
      validationSchema
    };
  }
});
</script>

<style scoped>
.error {
  color: red;
}
</style>
