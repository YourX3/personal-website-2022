import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify';
import { vuetifyTheme } from "./theme-config";

Vue.config.productionTip = false;
Vue.use(Vuetify);

import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
});

new Vue({
  router,
  store,
  vuetify : new Vuetify(vuetifyTheme),
  render: (h) => h(App),
}).$mount("#app");

