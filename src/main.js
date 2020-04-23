import Vue from "vue";
import VueCarousel from "vue-carousel";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import HomePage from "./HomePage.vue";
import AboutPage from "./AboutPage.vue";
import ContactPage from "./ContactPage.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);
Vue.use(Vuetify);

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

    {
      path: "/ContactPage",
      name: "Contact",
      component: ContactPage,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  Vuetify,
  router,
}).$mount("#app");
