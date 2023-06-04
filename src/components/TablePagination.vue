<template>
  <ul v-if="last_page > 1" class="pagination">
    <li
      :class="{
        'page-item': true,
        previous: true,
        disabled: currentPage == 1
      }">
      <a class="page-link" @click="setPage(currentPage - 1)">
        Previous
        <i class="previous"></i>
      </a>
    </li>
    <li
      v-for="(page, index) in pageNumbers"
      :key="index"
      :class="{ 'page-item': true, active: page == currentPage }">
      <a class="page-link" @click="setPage(page)">{{ page }}</a>
    </li>
    <li
      :class="{
        'page-item': true,
        next: true,
        disabled: currentPage == last_page
      }">
      <a class="page-link" @click="setPage(currentPage + 1)">
        Next
        <i class="next"></i>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref } from "vue";

export interface Pagination {
  current_page: number;
  last_page: number;
}

const props = defineProps<Pagination>();
const emits = defineEmits(["change-page"]);
const currentPage = ref(props.current_page ?? 1);

const setPage = (newPage: number) => {
  currentPage.value = newPage;
  emits("change-page", newPage);
};

const pageNumbers = computed(() => {
  const result = getButtonsPagination(currentPage.value, props.last_page);
  return result;
});

// eslint-disable-next-line
const getButtonsPagination = (currentPage: number = 1, totalPage: number = 1) => {
  const pageNumbers = [];

  pageNumbers.push(1);
  for (let i = currentPage - 3; i < currentPage; i++) {
    if (i > 1) {
      pageNumbers.push(i);
    }
  }

  if (currentPage !== 1 && currentPage !== totalPage) {
    pageNumbers.push(currentPage);
  }

  for (let i = currentPage + 1; i <= currentPage + 3; i++) {
    if (i < totalPage) {
      pageNumbers.push(i);
    }
  }
  pageNumbers.push(totalPage);

  return pageNumbers;
};
</script>
