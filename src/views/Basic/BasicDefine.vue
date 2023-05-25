<template>
  <div class="home">
    <!-- vue create blog -->

    <!--manual select  -->
    <!--typescript,router , linter formater ,
      choose vue version   -->

    <!-- vue 3 hostory mode yes
       -->

    <!-- eslint prettier  -->

    <!-- lint on save  -->
    <!-- in dedicated  -->
    <p>Basic View</p>
    {{ city }}

    My number is {{ number }}

    <button type="submit" @click="clickButtonFunction()">BUTTON yeaaa</button>

    <!-- REACTIVE -->
    <p>{{ state.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "basic-component",
  components: {},
  setup() {
    const city = ref("Bratislava");
    const number = ref(0);

    const countTwoNumbers = (number1: number, number2: number) => {
      return number1 + number2;
    };

    console.log(countTwoNumbers(4, 10));

    const clickButtonFunction = () => {
      number.value = number.value + 1;
    };

    // reactive
    //cely stav
    const state = reactive({
      age: 0,
      name: "Harry"
    });

    // vyhoda ze nemusim vsetky hodnoty pisat do return
    //stratil som

    // to refs pomocnik
    // rozlozit naspet na reaktivne referencie pomocou to refs
    // hodnotu s reaktivnim
    // ...toRefs(state)
    //

    return { city, number, clickButtonFunction, state };
  }
});
</script>

<style scoped></style>
