import Vue from "vue";
import VueCarousel from "vue-carousel";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import HomePage from "./HomePage.vue";
import AboutPage from "./AboutPage.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/AboutPage",
      name: "About",
      component: AboutPage,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
