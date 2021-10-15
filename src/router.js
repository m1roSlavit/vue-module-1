import Vue from "vue";
import Router from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import CreateBusTripPage from "./pages/CreateBusTripPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/create-bus-trip",
      component: CreateBusTripPage,
    },
  ],
});
