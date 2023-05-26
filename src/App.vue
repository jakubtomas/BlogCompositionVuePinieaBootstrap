<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">All blogs</router-link>|
    <router-link to="/addBlog">new blog</router-link> |
    <router-link to="/users">users</router-link> |
    <router-link to="/BasicDefine">BasicDefine</router-link> |
    <router-link to="/BasicDefineSetup">BasicDefineSetup</router-link> |
    <router-link to="/usersTableList">Users Table list</router-link> |
    <router-link to="/usersTableListV2">Users Table2</router-link> |
    <router-link to="/usersTableListV3">Users Table3</router-link> |
    <router-link to="/propsEmit">propsEmit</router-link> |
    <router-link to="/vmodelmodelvalue">vmodelmodelValue</router-link> |
    <router-link to="/todoList">todoList</router-link> |
  </nav>
  <code v-if="store.getMessages.length > 0">
    <div :class="'alert alert-' + store.getTypeMessage" role="alert">
      <ul>
        <li
          v-for="(todo, index) in store.getMessages"
          :key="index"
          class="list-group-item">
          {{ todo }}
        </li>
      </ul>
    </div>
  </code>
  <AlertComponent></AlertComponent>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlertComponent from "@/components/Alert.vue";
import { useWindowMessages } from "@/stores/windowMessage";

export default defineComponent({
  name: "app-component",
  components: { AlertComponent },
  setup() {
    const store = useWindowMessages();

    return { store };
  }
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
