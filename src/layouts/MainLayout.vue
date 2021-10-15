<template>
  <div>
    <c-header />
    <main class="main-layout-content">
      <slot></slot>
    </main>
    <c-footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    "c-header": Header,
    "c-footer": Footer,
  },
  name: "MainLayout",
};
</script>

<style lang="css" scoped>
.main-layout-content {
  padding: 50px 30px;
}
</style>
