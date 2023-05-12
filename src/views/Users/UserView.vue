<template>
  <div class="hello">
    <h1>Pinia</h1>
    <h1>Made By Getters</h1>
    <div v-for="user in getUsers" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <h1>Made By Actions</h1>
    <!-- <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div> -->
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
