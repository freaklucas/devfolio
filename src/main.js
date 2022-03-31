import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";

import VueParticlesBg from "particles-bg-vue";

Vue.use(VueParticlesBg);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
