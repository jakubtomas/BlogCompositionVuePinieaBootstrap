<template>
  <code
    >3 moznosti <br />
    1. to="/routerchild" <br />
    2.:to="{ path: '/routerchild' } <br />
    // dalsie navigacie podla name co mame <br />
    3. routeName: 'adminBuyerContact',
    <br />
    v navigace child { path: ':id/facilities', name: 'adminBuyerContact', components: {
    buyerDetail: () => import('@/views/FacilitiesList.vue') }, },
  </code>

  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="card" style="width: 18rem">
          <ul class="list-group list-group-flush">
            <router-link class="list-group-item p-4" :to="{ path: '/routerchild' }">
              Základné informácie
            </router-link>
            <router-link class="list-group-item p-4" to="/routerchild">
              next router link
            </router-link>

            <router-link class="list-group-item p-4" to="/routerchild">
              next link
            </router-link>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
</script>

<style scoped></style>
