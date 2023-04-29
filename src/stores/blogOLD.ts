import { Blog } from "@/interfaces/blog";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { alertStore } from "@/stores/alert";

export const blogStore = defineStore("blog", () => {
  const data: Blog[] = [
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
    }
  ];

  const blogs = ref<Blog[]>(data as Blog[]);

  const selectedBlog = ref<Blog>({} as Blog);
  const storAlert = alertStore();

  // getters
  const getOneBlog = computed(() => selectedBlog.value);
  const getAllBlogs = computed(() => blogs.value);

  //functions
  function addBlog(newBlog: Blog): void {
    blogs.value.push(newBlog);
    storAlert.setSuccess("new item has been created successfully");
  }

  function updateBlog(newBlog: Blog): void {
    blogs.value = blogs.value.map((blog) => {
      if (blog.id === newBlog.id) {
        return {
          ...blog,
          ...newBlog
        };
      }
      return blog;
    });

    storAlert.setSuccess("Blog has been updated ");
  }

  function deleteBlog(id: number): void {
    blogs.value = blogs.value.filter((blog) => blog.id !== id);
    storAlert.setSuccess("Blog has been deleted ");
  }

  function setSelectedBlog(id: number): void {
    const oneBlog = blogs.value.filter((blog) => blog.id === id);
    selectedBlog.value = oneBlog[0];
  }

  return {
    addBlog,
    getAllBlogs,
    getOneBlog,
    setSelectedBlog,
    updateBlog,
    deleteBlog
  };
});
