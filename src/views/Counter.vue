<template>
  <h1>counter</h1>
  <h3>{{ counter }}</h3>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import useCounter from "@/composables/useCounter";
export default {
  setup() {
    const { counter, increase, decrease } = useCounter(25);
    return { counter, increase, decrease };
  },
};
</script>

<style></style>
