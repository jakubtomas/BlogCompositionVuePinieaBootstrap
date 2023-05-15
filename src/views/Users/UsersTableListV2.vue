<template>
  <code
    style="
      background-color: #f5f5f5;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      padding: 10px;
      display: block;
      font-family: monospace;
    ">
    <div>UserTable list</div>
  </code>

  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <table class="table table-striped table-sm table-bordered">
          <thead>
            <tr>
              <th scope="col" v-for="(item, index) in tableHeader" :key="index">
                {{ item.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(user, index) in mockUsersData.data" :key="index">
              <td>{{ user.attributes.first_name }}</td>
              <td>{{ user.attributes.last_name }}</td>
              <td>{{ user.attributes.email }}</td>
              <td>{{ user.attributes.rank }}</td>
              <td>{{ user.attributes.created_at }}</td>
              <td></td>
            </tr> -->
            <tr v-for="(user, index) in users" :key="index">
              <td v-for="(header, j) in tableHeader" :key="j">
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
        name
        {{ name }}
      </div>
    </div>

    <!-- Pagination -->
    <div class="row">
      <div class="col-6">
        strana {{ mockUsersData.meta.current_page }} s
        {{ mockUsersData.meta.last_page }}
      </div>
      <div class="col-6">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <!-- <li
              class="page-item"
              v-for="page in mockUsersData.meta.total"
              :key="page + 1">
              <a class="page-link" href="#">{{ page }}</a>
            </li> -->
            <template v-for="page in mockUsersData.meta.last_page">
              <!-- show current page and two pages less and higher, as well as the last page -->
              <li
                v-if="
                  page === 1 ||
                  page === mockUsersData.meta.current_page - 2 ||
                  page === mockUsersData.meta.current_page - 1 ||
                  page === mockUsersData.meta.current_page ||
                  page === mockUsersData.meta.current_page + 1 ||
                  page === mockUsersData.meta.current_page + 2 ||
                  page === mockUsersData.meta.last_page
                "
                :key="page"
                class="page-item"
                :class="{ active: mockUsersData.meta.current_page === page }">
                <!-- <a class="page-link" @click="setPage(page)">{{ page }}</a> -->
              </li>
            </template>

            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { debounce } from "lodash";

import { useI18n } from "vue-i18n";

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
const name = ref(t("first_name"));

const tableHeaderData = ref<HeaderItem[]>([] as HeaderItem[]);

tableHeaderData.value = [
  {
    id: 1,
    name: t("first_name"),
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
    name: "rank",
    title: "rank",
    stringOrderBy: "roles.name"
  },
  {
    id: 5,
    name: "date created",
    title: "date created",
    stringOrderBy: "created_at"
  },
  {
    id: 6,
    name: "mockString",
    title: "mockString",
    stringOrderBy: ""
  }
];

const users = ref<{ [key: string]: any }[]>([
  {
    id: "2",
    first_name: "John",
    last_name: "Doe",
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
    last_page: 32,
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
      },
      {
        url: "https://mockUrl/users?page=2",
        label: "2",
        active: false
      },
      {
        url: "https://mockUrl/users?page=3",
        label: "3",
        active: false
      },
      {
        url: "https://mockUrl/users?page=4",
        label: "4",
        active: false
      },
      {
        url: "https://mockUrl/users?page=5",
        label: "5",
        active: false
      },
      {
        url: "https://mockUrl/users?page=6",
        label: "6",
        active: false
      },
      {
        url: "https://mockUrl/users?page=7",
        label: "7",
        active: false
      },
      {
        url: "https://mockUrl/users?page=8",
        label: "8",
        active: false
      },
      {
        url: "https://mockUrl/users?page=9",
        label: "9",
        active: false
      },
      {
        url: "https://mockUrl/users?page=10",
        label: "10",
        active: false
      },
      {
        url: null,
        label: "...",
        active: false
      },
      {
        url: "https://mockUrl/users?page=31",
        label: "31",
        active: false
      },
      {
        url: "https://mockUrl/users?page=32",
        label: "32",
        active: false
      },
      {
        url: "https://mockUrl/users?page=2",
        label: "Next &raquo;",
        active: false
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
const searchText = debounce((searchText: string) => {
  searchInput.value = searchText;
  tableOrder.value.sortOrder = "asc";
  tableOrder.value.orderBy = "";
  page = 1;

  fetchUsersData();
}, 250);

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

<style scoped></style>
