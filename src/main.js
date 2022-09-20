import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index.js";

import './assets/my.css'
import './assets/mybasic.css'
import './assets/mysidebar.css'
import './assets/sidebar.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App)
app.use(router)
app.mount('#app')
