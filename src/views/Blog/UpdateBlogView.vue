<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2">Update Blog</h1>
        <VForm @submit="updateBlog" :validation-schema="validationSchema">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tittle</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              placeholder="Title"
              name="title"
              v-model="blog.title" />

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
              v-model="blog.text" />

            <div class="error">
              <ErrorMessage name="text" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary my-2">update blog</button>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { blogStore } from "@/stores/blog";
import { Blog } from "@/interfaces/blog";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";

import * as yup from "yup";

export default defineComponent({
  name: "AddBlogView",
  components: {
    ErrorMessage,
    Field,
    VForm
  },
  setup() {
    const router = useRouter();
    const { params } = useRoute();
    const storeBlog = blogStore();

    const title = ref();
    const text = ref();

    let blog = ref<Blog>({} as Blog);

    const validationSchema = yup.object().shape({
      title: yup.string().required("Please enter a title").max(60),
      text: yup.string().required("Please enter some text").max(250)
    });

    blog = computed(() => storeBlog.getOneBlog);
    storeBlog.setSelectedBlog(parseInt(params.id as string));

    const updateBlog = () => {
      const updatedBlog = {
        id: blog.value.id,
        author: "Peter3",
        category: "sport",
        title: blog.value.title,
        text: blog.value.text
      };
      storeBlog.updateBlog(updatedBlog);
      router.push("/detailsBlog/" + blog.value.id);
    };

    return {
      store: storeBlog,
      blog,
      title,
      text,
      updateBlog,
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
