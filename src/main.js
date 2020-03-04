import Vue from "vue";
import App from "./App.vue";
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false;
Vue.use(VueSimpleAlert);

new Vue({
  render: h => h(App)
}).$mount("#app");
