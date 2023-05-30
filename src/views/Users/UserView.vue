<template>
  <div class="hello">
    <h2>Pinia example with mock data</h2>
    <h5>Made By Getters</h5>
    <div v-for="user in getUsers" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <h5>fetch data without using computed property</h5>
    <div v-for="user in getUsers" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/users";
import { User } from "@/interfaces/user";

const store = useUserStore();

const getUsers = computed<User[]>(() => {
  return store.getUsers;
});

// const users = computed(() => {
//   return store.users;
// });

onMounted(() => {
  store.fetchUsers();
});
</script>
