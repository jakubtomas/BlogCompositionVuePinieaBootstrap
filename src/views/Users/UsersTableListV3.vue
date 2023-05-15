<template>
  <code>
    <div>UserTable list 3</div>
  </code>

  <DataTable
    @change-page="changePage"
    @change-order-by="changeOrderBy"
    @change-search-text="changeSearchText"
    :table-header-data="tableHeader"
    :table-body-data="users"
    :paginationProps="{
      current_page: mockUsersData.meta.current_page,
      last_page: mockUsersData.meta.last_page ? mockUsersData.meta.last_page : 1
    }">
  </DataTable>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { debounce } from "lodash";
import { useI18n } from "vue-i18n";
import DataTable from "@/components/DataTable.vue";

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

const { t } = useI18n();

const changePage = (params: number) => {
  console.log(params);
};
const changeOrderBy = (params: { orderBy: string; sortOrder: "asc" | "desc" }) => {
  console.log(params.orderBy);
  console.log(params.sortOrder);
};
const changeSearchText = (params: any) => {
  console.log(params);
};

const users = ref<{ [key: string]: any }[]>([
  {
    id: "2",
    first_name: "John",
    last_name: "Wick",
    email: "johndoe@example.com",
    role: "user",
    created_at: "13.05.2023 10:23",
    updated_at: "13.05.2023 11:47"
  },
  {
    id: "3",
    first_name: "Jane",
    last_name: "Doe",
    email: "janedoe@example.com",
    role: "user",
    created_at: "13.05.2023 14:51",
    updated_at: "13.05.2023 16:02"
  },
  {
    id: "4",
    first_name: "Bob",
    last_name: "Smith",
    email: "bobsmith@example.com",
    role: "user",
    created_at: "14.05.2023 09:12",
    updated_at: ""
  }
]);

const tableHeader = ref<HeaderItem[]>([
  {
    id: 1,
    name: "first_name",
    title: "first_name",
    stringOrderBy: "first_name"
  },
  {
    id: 2,
    name: "last_name",
    title: "last_name",
    stringOrderBy: "last_name"
  },
  {
    id: 3,
    name: "email",
    title: "email",
    stringOrderBy: ""
  },
  {
    id: 4,
    name: "role",
    title: "rank",
    stringOrderBy: "roles.name"
  },
  {
    id: 5,
    name: "created_at",
    title: "created_date",
    stringOrderBy: "created_at"
  },
  {
    id: 6,
    name: "options",
    title: "options",
    stringOrderBy: ""
  }
]);

const mockUsersData = {
  data: [
    {
      id: "1",
      attributes: {
        first_name: "Admin",
        last_name: "Hrasko",
        email: "admin@hrasko.com",
        rank: "admin",
        created_at: "2024-05-12T11:18:12.000000Z",
        updated_at: "2024-05-12T11:28:80.000000Z"
      }
    },
    {
      id: "3",
      attributes: {
        first_name: "Student",
        last_name: "lastname",
        email: "student@gmail.com.com",
        rank: "Student",
        created_at: "2024-05-12T11:17:13.000000Z",
        updated_at: null
      }
    }
  ],
  links: {
    first: "https://mockUrl/users?page=1",
    last: "https://mockUrl/users?page=32",
    prev: null,
    next: "https://mockUrl/users?page=2"
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 11,
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false
      },
      {
        url: "https://mockUrl/users?page=1",
        label: "1",
        active: true
      }
    ],
    path: "https://mockUrl/users",
    per_page: 20,
    to: 20,
    total: 628
  }
};

let page = 1;
let searchInput = ref("");

const tableOrder = ref<TableOrder>({
  orderBy: "id",
  sortOrder: "asc"
});
let displaySpinner = ref(false);

// in real case we take the users from api after formating data
//users = computed(() => userStore.getUsers);

onMounted(() => {
  fetchUsersData();
});
// const searchText = debounce((searchText: string) => {
//   searchInput.value = searchText;
//   tableOrder.value.sortOrder = "asc";
//   tableOrder.value.orderBy = "";
//   page = 1;

//   fetchUsersData();
// }, 250);

const fetchUsersData = () => {
  //API for fetching data with parameter
  displaySpinner.value = true;

  const parameter = {
    sort_by: tableOrder.value.orderBy,
    page: page.toString(),
    sort_order: tableOrder.value.sortOrder,
    search: searchInput.value
  };

  //maybe create store with this function ,
  // or create global file for API ,, with AXIOS
  // await userStore.getUsersData(params)
  displaySpinner.value = false;
};
</script>

<style scoped>
code {
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: block;
  font-family: monospace;
}
</style>
