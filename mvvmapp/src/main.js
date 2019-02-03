import Vue from "vue";
import App from "./ViewModel/App.vue";
import router from "./router.js";

Vue.config.productionTip = false;

new Vue ({
  el : "#app",
  router,
  components : {"app" : App},
  template : "<app></app>"
});
