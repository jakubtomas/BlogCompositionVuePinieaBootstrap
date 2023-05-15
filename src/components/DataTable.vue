<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-striped table-sm table-bordered">
          <thead>
            <tr>
              <th
                scope="col"
                @click="setOrderBy(item.name)"
                v-for="(item, index) in tableHeaderData"
                :key="index">
                {{ item.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in tableBodyData" :key="index">
              <td v-for="(header, j) in tableHeaderData" :key="j">
                <slot
                  :name="header.name"
                  :rowData="user"
                  :columnData="user[header.name]"
                  >{{ user[header.name] }}</slot
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="row">
      <div class="col-4">
        strana {{ paginationProps?.current_page }} s
        {{ paginationProps?.last_page }}
      </div>
      <div class="col-8">
        <ul v-if="last_page > 1" class="pagination">
          <li :class="{ 'page-item': true, previous: true, disabled: currentPage == 1 }">
            <a class="page-link" @click="setPage(currentPage - 1)"
              >Previous<i class="previous"></i
            ></a>
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
            <a class="page-link" @click="setPage(currentPage + 1)"
              >Next<i class="next"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, defineEmits, ref, watch, computed } from "vue";

export interface HeaderItem {
  id: number;
  name: string;
  title: string;
  stringOrderBy: string;
  width?: string;
}
export interface TableOrder {
  orderBy: string;
  sortOrder: "asc" | "desc";
}

export interface Pagination {
  current_page: number;
  last_page: number;
}

//todo
//add checkboxies with create array of selected value + checboxies update when click
//searchText + functionality call function in parent
// sorting sipky hore dole , change background color of sorting header
//padding
///color
// pocet zaznamov per page , plus akcia zmena
//vsetky akcie kontrola requestov string console log

const props = defineProps<{
  tableHeaderData: HeaderItem[];
  tableBodyData: { [key: string]: any }[];
  paginationProps?: Pagination;
  order?: TableOrder;
  loading?: boolean;
  tableStyle?: "red";
}>();

const emits = defineEmits(["change-page", "change-order-by", "change-search-text"]);

const searchText = ref("");

const last_page = ref(props.paginationProps?.last_page ?? 1);
const currentPage = ref(props.paginationProps?.current_page ?? 0);

const tableOrder = ref<TableOrder>({
  orderBy: "id",
  sortOrder: "asc"
});

const setPage = (newPage: number) => {
  currentPage.value = newPage;
  emits("change-page", newPage);
};

const setOrderBy = (itemName: string) => {
  if (itemName) {
    emits("change-order-by", {
      orderBy: itemName,
      sortOrder: props.order?.sortOrder == "asc" ? "desc" : "asc"
    });
  }
};

watch(searchText, (newValue) => {
  if (newValue.length > 1 || newValue.length === 0) {
    currentPage.value = 1;
    emits("change-search-text", newValue);
  }
});

const pageNumbers = computed(() => {
  const result = getPageButtons(currentPage.value, last_page.value);
  return result;
});

// eslint-disable-next-line
const getPageButtons = (currentPage: number = 1, totalPage: number = 1) => {
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

<style scoped>
.page-item.active {
  color: red !important;
}
.page-link:hover {
  cursor: pointer;
}

/* now working  */

/* .page-item.active {
  background-color: red !important;
  color: white;
} */
</style>
