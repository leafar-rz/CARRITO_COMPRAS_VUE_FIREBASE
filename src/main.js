import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router' // importarlo para usarlo mas abajo

// Importar componentes (de cada equipo)
import listado from './components/ListadoUsuarios.vue';
import multimedia from './components/Multimedia.vue';

// Definir componentes


// Definir las rutas de los componentes
// contiene todas las rutas el siguiente arreglo
const routes = [
    {
        path: '/', component: listado, 
    },
    {
        path: '/', component: multimedia,
    }
]

// Crear las instancias de cada uno de los componentes
const router = createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// Utilizar las instancias con Route desde Vue

const app = createApp(App);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
