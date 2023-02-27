<template>
  <h1>Buscar pokemon: {{ pokeID }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="Numero de pokemon" autofocus v-model="pokeID" ref="txtSerchID" />
  </form>
  <br />
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const pokeID = ref(0);
    const txtSerchID = ref();

    onActivated(() => {
      txtSerchID.value.select();
    });

    const onSubmit = () => {
      // console.log(pokeID.value);
      router.push({ name: "pokemon-id", params: { id: pokeID.value } });
    };
    return { pokeID, onSubmit, txtSerchID };
  },
};
</script>

<style></style>
