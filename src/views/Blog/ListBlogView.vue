<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2">List of blogs</h1>

        <button type="button" @click="redirectToCreateBlog" class="btn btn-primary my-2">
          Create new blog
        </button>
        <ul v-if="blogs" class="list-group">
          <li
            v-for="(blog, index) in blogs"
            :key="index"
            class="list-group-item"
            @click="redirectToDetailsBlog(blog.id)">
            {{ blog.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { blogStore } from "@/stores/blog";
import { Blog } from "@/interfaces/blog";

export default defineComponent({
  name: "list-blog",
  components: {},
  setup() {
    const router = useRouter();
    const store = blogStore();

    let blogs = ref<Blog[]>([] as Blog[]);

    blogs = computed(() => store.getAllBlogs);

    const redirectToCreateBlog = (): void => {
      router.push("/addBlog");
    };

    const redirectToDetailsBlog = (id: number): void => {
      router.push("/detailsBlog/" + id);
    };

    return {
      redirectToCreateBlog,
      redirectToDetailsBlog,
      store,
      blogs
    };
  }
});
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover {
  background-color: #0d6efd;
  color: #fff;
}
</style>
