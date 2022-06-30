import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import * as echarts from "echarts";
import VueECharts from "vue-echarts";

createApp(App).component("v-chart", VueECharts).use(store).mount("#app");
