<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">All blogs</router-link>|
    <router-link to="/addBlog">new blog</router-link> |
  </nav>
  <AlertComponent></AlertComponent>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlertComponent from "@/components/Alert.vue";

export default defineComponent({
  name: "app-component",
  components: { AlertComponent }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
