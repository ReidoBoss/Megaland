import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// declare module "@jamescoyle/vue-icon" {
//   import { DefineComponent } from "vue";

//   interface SvgIconProps {
//     type?: string;
//     path: string;
//     size?: string | number;
//     viewbox?: string;
//     flip?: "horizontal" | "vertical" | "both" | "none";
//     rotate?: number;
//   }

//   const SvgIcon: DefineComponent<SvgIconProps>;
//   export default SvgIcon;
// }

const app = createApp(App);
app.use(router);
app.mount("#app");
