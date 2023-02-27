<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h4>{{ reactiveObj }}</h4>
    <h4>{{ refObj }}</h4>
    <button @click="changeReactiveObj">changeReactiveObj</button>
    <button @click="changeRefObj">changeRefObj</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";
export default {
  name: "HomeView",
  setup() {
    const refObj = ref({
      name: "Ref",
      age: 25,
    });

    const reactiveObj = reactive({
      name: "Reactive",
      age: 25,
    });

    const changeReactiveObj = () => {
      reactiveObj.name = "Reactive Changed";
      reactiveObj.age = 30;
    };

    const changeRefObj = () => {
      refObj.value.name = "Ref Changed";
      refObj.value.age = 30;
    };

    return { reactiveObj, refObj, changeReactiveObj, changeRefObj };
  },
};
</script>
