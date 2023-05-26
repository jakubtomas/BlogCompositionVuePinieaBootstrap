import { createApp } from "vue";

import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "@/core/plugins/i18n";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import "sweetalert2/dist/sweetalert2.min.css";

const pinia = createPinia();
const app = createApp(App);

//app.config.globalProperties.$t = i18n.global.t;
app.use(i18n);

app.use(pinia);
app.use(router);
app.mount("#app");
