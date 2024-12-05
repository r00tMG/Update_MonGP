import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../components/dashboard/Dashboard.vue";
import App from "../components/App.vue";

const router = createRouter({
    //import.meta.env.BASE_URL
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App
        }
    ]
})

export default router;
