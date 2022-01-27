import './public-path'
import {createApp} from 'vue'
import App from './App.vue'
import Home from './views/Home'
import About from './views/About'
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ],
})

const app = createApp(App).use(router)

app.mount('#app')

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.unmount()
})
