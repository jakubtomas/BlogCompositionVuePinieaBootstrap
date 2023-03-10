<template>
  <div class="container">
    <h1>Details</h1>
    <div class="card">
      <div class="card-header d-flex justify-content-around align-items-center">
        <h3 class="card-title">Name tittle</h3>
        <div class="card-toolbar">
          <button type="button" class="btn btn-warning btn-sm mx-2">
            <!-- <i class="fas fa-pencil-alt mr-2"></i>Upraviť -->
            Edit Blog
          </button>

          <button type="button" class="btn btn-danger btn-sm">
            <!-- <i class="fas fa-times mr-2"></i>Zrušiť úpravy -->
            Delete blog
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facilis Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Ab facilis Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ab facilis Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Ab facilis Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ab facilis accusantium consectetur quasi,
              modi magni beatae quis hic quia quam, iste neque? Cum, modi dolorum! Dolor
              repellat unde laudantium possimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "DetailsBlogView",
  components: {},
  props: {
    //  ide: { type: Number, required: true }
  },
  setup() {
    // const route = useRoute();
    // const id = route.params.id;
    // const name = route.query.name;

    const route = useRoute();
    const urlParam: any = ref();
    const userData = ref();

    const { params } = useRoute();

    onMounted(() => {
      console.log("automatic");
      console.log(route.params);

      funnyFunction();
    });

    const funnyFunction = () => {
      console.log("funny");
      console.log("tvoj parameter " + JSON.stringify(params));
      console.log(route.params);
    };

    return { route, urlParam, funnyFunction };
  }
});
</script>

<style scoped>
.text {
  text-align: justify;
}
</style>
