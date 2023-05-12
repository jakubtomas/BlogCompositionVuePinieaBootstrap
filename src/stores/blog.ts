import { defineStore } from "pinia";
import { Blog } from "@/interfaces/blog";

export const useBlogStore = defineStore("user", {
  state: () => ({
    blogs: [
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
      }
    ] as Blog[],
    selectedBlog: {} as Blog
  }),
  getters: {
    getAllBlogs(state) {
      return state.blogs;
    },
    getOneBlog(state) {
      return state.selectedBlog;
    }
  },
  actions: {
    addBlog(newBlog: Blog) {
      this.blogs.push(newBlog);
    },
    updateBlog(newBlog: Blog) {
      this.blogs = this.blogs.map((blog) => {
        if (blog.id === newBlog.id) {
          return {
            ...blog,
            ...newBlog
          };
        }
        return blog;
      });
    },

    deleteBlog(id: number): void {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
      //storAlert.setSuccess("Blog has been deleted ");
    },

    setSelectedBlog(id: number): void {
      const oneBlog = this.blogs.filter((blog) => blog.id === id);
      this.selectedBlog = oneBlog[0];
    }
  }
});
