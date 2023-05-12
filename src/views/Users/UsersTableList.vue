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
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

import { useI18n } from "vue-i18n";

export interface HeaderItem {
  id: number;
  name: string;
  stringOrderBy: string;
}

const { t } = useI18n();
const name = ref(t("first_name"));

const tableHeaderData = ref<HeaderItem[]>([] as HeaderItem[]);

tableHeaderData.value = [
  {
    id: 1,
    name: t("first_name"),
    stringOrderBy: "first_name"
  },
  {
    id: 2,
    name: "last_name",
    stringOrderBy: "last_name"
  },
  {
    id: 3,
    name: "email",
    stringOrderBy: ""
  },
  {
    id: 4,
    name: "rank",
    stringOrderBy: "roles.name"
  },
  {
    id: 5,
    name: "date created",
    stringOrderBy: "created_at"
  },
  {
    id: 6,
    name: "mockString",
    stringOrderBy: ""
  }
];

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
</script>

<style scoped></style>
