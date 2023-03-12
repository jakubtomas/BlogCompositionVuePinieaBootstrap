<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2">Add new blog</h1>
        <form action="">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tittle</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              v-model="blog.title" />
          </div>
          <!--  -->
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Text</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Write text"
              v-model="blog.text"
              rows="4"></textarea>
          </div>
          <button type="button" class="btn btn-primary my-2" @click="updateBlog">
            Update Blog
          </button>
        </form>
        <!-- LIST -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { blogStore } from "@/stores/blog";
import { Blog } from "@/interfaces/blog";

export default defineComponent({
  name: "AddBlogView",
  components: {},
  setup() {
    const router = useRouter();
    const { params } = useRoute();
    const storeBlog = blogStore();

    const title = ref();
    const text = ref();

    let blog = ref<Blog>({} as Blog);
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
      updateBlog
    };
  }
});
</script>
