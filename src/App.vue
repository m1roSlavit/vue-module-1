<template>
  <div id="app">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";

export default {
  name: "App",
  components: { MainLayout },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>
