import './bootstrap';
import {createApp} from 'vue'
import App from "./components/App.vue";
import '../css/app.css';
import 'flowbite';
import Dashboard from "./components/dashboard/Dashboard.vue";
import router from '../js/router/index.js'; // Importer le router


createApp(App).provide('bootstrap', bootstrap);
createApp(Dashboard).provide('bootstrap', bootstrap);

if (document.querySelector('#app')) {
    createApp(App).use(router)
    createApp(App).mount('#app');
}

if (document.querySelector('#dashboard')) {
    createApp(Dashboard).mount('#dashboard');
}
