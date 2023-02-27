<template>
  <h2 v-if="isLoading">Espere porfavor</h2>
  <h2 v-else>Usuarios</h2>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>
  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, id, email } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>
  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>pagina: {{ currentPage }}</span>
</template>

<script>
import getUsers from "@/composables/useUsers";

export default {
  setup() {
    const { users, isLoading, currentPage, errorMessage, nextPage, prevPage } = getUsers();
    return {
      users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  width: 250px;
}
</style>
