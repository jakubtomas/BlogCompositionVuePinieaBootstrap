<template>
  <!--  -->
  <div>
    <div v-if="isPopupVisible" class="popup">
      <div class="popup-message">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <button class="btn btn-info" @click="hidePopup">Close</button>
        <button class="btn btn-info" @click="deleteBlog">Yes delete Item</button>
      </div>
    </div>
  </div>
  <!--  -->
  <div v-if="blog" class="container">
    <h1>Details Blog</h1>
    <div class="d-flex justify-content-around me-2">
      <em>Autor {{ blog.author }}</em>
      <em>Category {{ blog.category }}</em>
    </div>
    <div class="card">
      <div class="card-header d-flex justify-content-around align-items-center">
        <h3 class="card-title">Title: {{ blog.title }}</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-warning btn-sm mx-2"
            @click="redirectToUpdate">
            Edit Blog
          </button>

          <button type="button" class="btn btn-danger btn-sm" @click="showPopup">
            Delete blog
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <p class="text">
              {{ blog.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!blog">This blog doesnt exist. Probably mistake.</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBlogStore } from "@/stores/blog";
import { Blog } from "@/interfaces/blog";

export default defineComponent({
  name: "DetailsBlogView",
  components: {},
  props: {},
  setup() {
    const store = useBlogStore();
    const route = useRoute();
    const router = useRouter();

    let blog = ref<Blog>({} as Blog);

    const { params } = useRoute();
    blog = computed(() => store.getOneBlog);
    store.setSelectedBlog(parseInt(params.id as string));

    const isPopupVisible = ref(false);
    const popupMessage = ref("");

    //functions
    const showPopup = () => {
      isPopupVisible.value = true;
      popupMessage.value = "Are you sure you want to delete the item?";
    };

    const hidePopup = () => {
      isPopupVisible.value = false;
    };

    const redirectToUpdate = () => {
      router.push("/updateBlog/" + blog.value.id);
    };

    const deleteBlog = () => {
      store.deleteBlog(blog.value.id);
      router.push("/blog");
    };

    return {
      route,
      blog,
      redirectToUpdate,
      deleteBlog,
      isPopupVisible,
      message: popupMessage,
      showPopup,
      hidePopup
    };
  }
});
</script>

<style scoped>
.text {
  text-align: justify;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  z-index: 9999 !important;
}

.popup-message {
  margin-bottom: 16px;
}
</style>
