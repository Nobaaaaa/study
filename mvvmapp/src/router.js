import Vue from "vue";
import Router from "vue-router";
import Top from "./ViewModel/Top";

Vue.use(Router);

export default new Router({
  mode : "history",
  routes : [
    {
      path : "/",
      name : "Top",
      component : Top
    }
  ]
});
