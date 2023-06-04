<template>
  <code class="instruction">
    <div>
      UserTable list , zakladna tabulka, vypis dat v-for, basic pagination not working
      correctly
    </div>
  </code>

  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <table class="table table-striped table-sm table-bordered">
          <thead>
            <tr>
              <th scope="col" v-for="(item, index) in tableHeaderData" :key="index">
                {{ item.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in mockUsersData.data" :key="index">
              <td>{{ user.attributes.first_name }}</td>
              <td>{{ user.attributes.last_name }}</td>
              <td>{{ user.attributes.email }}</td>
              <td>{{ user.attributes.rank }}</td>
              <td>{{ user.attributes.created_at }}</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-info dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                  </ul>
                </div>
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
            <!-- vypisovanie vsetkych cisel -->
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

const users = [
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
  }
];

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

const fetchUsersData = () => {
  //API for fetching data with parameter
  displaySpinner.value = true;

  const parameter = {
    sort_by: tableOrder.value.orderBy,
    page: page.toString(),
    sort_order: tableOrder.value.sortOrder,
    search: searchInput.value
  };

  displaySpinner.value = false;
};
</script>

<style scoped>
.instruction {
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: block;
  font-family: monospace;
}
</style>
