<template>
  <header class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/create-bus-trip">Create new bus trip</router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="css" scoped>
.header {
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
}
.header > a {
  padding: 10px;
}
</style>
