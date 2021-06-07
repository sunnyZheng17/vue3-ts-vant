import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vantPlugins } from './plugins/vant'

import "@/style/reset.less"



const app = createApp(App)
app.use(store).use(router).
use(vantPlugins).mount('#app')
