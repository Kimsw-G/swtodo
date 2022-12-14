import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import store from './store'
import axios from 'axios'
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";


axios.defaults.baseURL="http://192.168.0.7:8090"

const app=createApp(App).use(store).use(route)
app.component("infinite-loading", InfiniteLoading);
app.config.globalProperties.axios=axios
app.mount('#app')