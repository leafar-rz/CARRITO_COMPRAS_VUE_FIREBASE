import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router' // importarlo para usarlo mas abajo

import login from './components/Login.vue';
import register from './components/register.vue';
import home from './components/listadoProductos.vue';
import carrito from './components/carrito.vue';


const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/register',
        component: register
    }
    ,
    {
        path: '/home',
        component: home,
        meta: { requiresAuth: true }
    }
    ,
    {
        path: '/carrito',
        component: carrito,
        meta: { requiresAuth: true }
    }
];

//creamos las instancias
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Se configura el middleware de navegación
router.beforeEach((to, from, next) => {
    // Se verifica si la ruta requiere autenticación
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    // Si la ruta requiere autenticación y el usuario no está autenticado, se redirige a la página de inicio de sesión
    if (requiresAuth && !localStorage.getItem('token')) {
      next('/');
    } else {
      next();
    }
  });
  

// intancia de vue
const app = createApp(App)

//usamos el router en la app
app.use(router)

app.mount('#app')