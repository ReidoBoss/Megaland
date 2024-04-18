import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import "flowbite";
import "flowbite";
import "flowbite-datepicker";
import "flowbite/dist/datepicker.turbo.js";
const app = createApp(App);

app.use(router);
app.use(mdiVue, {
    icons: mdijs,
  });
app.mount("#app");

