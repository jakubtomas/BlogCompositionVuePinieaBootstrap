<template>
  <div>
    <div class="row m-5" v-if="usersData.meta">
      <div class="col-6">
        Stránka {{ usersData.meta.current_page }} z(o)
        {{ usersData.meta.last_page }}
      </div>
      <!-- begin::Pagination -->
      <div class="col-6">
        <ul class="pagination">
          <li
            class="page-item previous"
            :class="{ disabled: usersData.meta.current_page == 1 }">
            <a @click="setPage(usersData.meta.current_page - 1)" class="page-link"
              ><i class="previous"></i>
            </a>
          </li>
          <li
            v-for="page in usersData.meta.last_page"
            :key="page"
            class="page-item"
            :class="{ active: usersData.meta.current_page === page }">
            <a class="page-link" @click="setPage(page)">{{ page }}</a>
          </li>
          <li
            class="page-item next"
            :class="{
              disabled: !(usersData.meta.current_page < usersData.meta.last_page)
            }">
            <a @click="setPage(usersData.meta.current_page + 1)" class="page-link"
              ><i class="next"></i
            ></a>
          </li>
        </ul>
      </div>
      <!-- end::Pagination -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
