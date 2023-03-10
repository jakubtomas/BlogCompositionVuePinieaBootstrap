<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2">List of blogs</h1>

        <button type="button" @click="increaseNumber">Click</button>
        <button type="button" @click="store.increment">Increment</button>
        <p>{{ store.name }}</p>
        <p>{{ store.count }}</p>
        <p>{{ store.doubleCount }}</p>

        <button type="button" @click="redirectToCreateBlog" class="btn btn-primary my-2">
          Create new blog
        </button>
        <!-- LIST -->
        <ul class="list-group">
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
import { defineComponent } from "vue";
import { Blog } from "@/interfaces/blog";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter";
export default defineComponent({
  name: "ListBlogView",
  components: {},
  setup() {
    const router = useRouter();
    const store = useCounterStore();

    const blogs: Blog[] = [
      {
        id: 1,
        author: "Peter1",
        category: "sport",
        title: "FIFA 20",
        text: "new Fiffa 2020"
      },
      {
        id: 2,
        author: "Peter2",
        category: "sport",
        title: "FIFA 21",
        text: "new Fiffa 2020"
      },
      {
        id: 3,
        author: "Peter3",
        category: "sport",
        title: "FIFA 22",
        text: "new Fiffa 2020"
      },
      {
        id: 4,
        author: "Peter",
        category: "sport",
        title: "FIFA 23",
        text: "new Fiffa 2sss020"
      }
    ];

    const redirectToCreateBlog = (): void => {
      router.push("/addBlog");
    };

    const redirectToDetailsBlog = (id: number): void => {
      console.log("My paremeter " + id);
      router.push("/detailsBlog/" + id);
    };

    const increaseNumber = () => {
      console.log("click button");
    };

    return { redirectToCreateBlog, redirectToDetailsBlog, blogs, increaseNumber, store };
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
