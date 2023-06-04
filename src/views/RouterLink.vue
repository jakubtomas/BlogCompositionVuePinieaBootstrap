<template>
  <code
    ><h4>3 moznosti implementovania router</h4>
    <br />
    1. to="/routerchild" <br />
    2.:to="{ path: '/routerchild' } <br />
    v tomto pripade mozeme pouzit aj meno a parameter <br />
    {:to=" name: link.routeName, params: link.params }<br />
    <br />
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
            <router-link class="list-group-item p-4" :to="{ path: '/routerLink' }">
              Základné informácie
            </router-link>
            <router-link class="list-group-item p-4" to="/routerLink">
              next router link
            </router-link>

            <router-link
              class="list-group-item p-4"
              :to="{ name: 'basicInfo', params: { id: 9 } }">
              Basic info
            </router-link>

            <router-link class="list-group-item p-4" to="/routerchild">
              next link
            </router-link>
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

<style scoped>
.router-link-exact-active {
  background-color: #009ef7;
  color: #ffffff;
}
</style>
<!-- navigacia -->
<!-- 
{
  path: 'buyers/detail',
  name: 'adminSectionBuyerDetails',
  component: AdminSectionBuyerDetails,
  meta: {
      pageTitle: 'Buyer',
      breadcrumb: [AdminMainDashboard, { pathName: 'adminListBuyers', label: 'buyers_list_of' }, { label: 'buyer_details' }],
  },
  children: [
      {
        //http://localhost:/admin/buyers/detail/1
          path: ':id',
          name: 'adminBuyerInfo',
          components: { buyerDetail: () => import('@/') },
      },
      {
        //http://localhost:8888/admin/buyers/detail/1/facilities
          path: ':id/facilities',
          name: 'adminBuyeFacilities',
          components: { buyerDetail: () => import('@/') },
      }, -->

<!-- data v scripte pre navigacie -->
<!-- const links = [
    {
        routeName: 'adminBuyerInfo',
        params: { id: route.params.id },
        title: 'basic_informations',
    }, -->

<!-- routerName je rovnake ako v children navigacie name -->
<!--  -->
