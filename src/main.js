import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./quasar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFontAwesome,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Cloudinary from "cloudinary-vue";
import Flutterwave from "flutterwave-vue-v3";

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(
  faFontAwesome,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faEnvelope,
  faPhoneAlt,
  faShoppingCart,
  faGoogle
);
Vue.config.productionTip = false;
Vue.use(Cloudinary, {
  configuration: { cloudName: "dz3ubwuhu" },
  components: ["CldImage"],
});
Vue.use(Flutterwave, {
  publicKey: "FLWPUBK_TEST-22a4bcfebeaf537a6156354940b6a40a-X",
});


new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
