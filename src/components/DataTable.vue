<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="searchText" />
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
                :class="
                  item.stringOrderBy === ''
                    ? 'noSort'
                    : item.stringOrderBy !== order?.orderBy
                    ? 'tdHover'
                    : order.sortOrder === 'asc'
                    ? 'blue'
                    : 'red'
                "
                v-for="(item, index) in tableHeaderData"
                :key="index">
                {{ item.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in tableBodyData" :key="index">
              <td v-for="(header, j) in tableHeaderData" :key="j">
                <slot :name="header.name" :rowData="user" :columnData="user[header.name]">
                  {{ user[header.name] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="row">
      <div class="col-4">
        strana {{ currentPage }} s
        {{ paginationProps?.last_page }}
      </div>
      <div class="col-8">
        <!-- <ul v-if="last_page > 1" class="pagination">
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
        </ul> -->

        <TablePagination
          :current_page="1"
          :last_page="last_page"
          @change-page="setPage"></TablePagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
import TablePagination from "@/components/TablePagination.vue";

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

const props = defineProps<{
  tableHeaderData: HeaderItem[];
  tableBodyData: { [key: string]: any }[];
  paginationProps?: Pagination;
  order?: TableOrder;
  loading?: boolean;
  tableStyle?: "red";
  checkboxies?: false;
}>();

const emits = defineEmits(["change-page", "change-order-by", "change-search-text"]);

const searchText = ref("");
const currentPage = ref(props.paginationProps?.current_page ?? 0);
const last_page = ref(props.paginationProps?.last_page ?? 1);

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
</script>

<style scoped>
.noSort {
  text-decoration: line-through;
  cursor: not-allowed;
}
.tdHover:hover {
  background-color: #cccc;
  cursor: pointer;
}
.red {
  color: red;
  cursor: pointer;
}
.blue {
  color: blue;
  cursor: pointer;
}
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
