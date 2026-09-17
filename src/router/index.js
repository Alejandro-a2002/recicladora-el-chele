import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Nosotros from '../views/Nosotros.vue'
import Materiales from '../views/Materiales.vue'
import Contactos from '../views/Contactos.vue'

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/nosotros',
        name: 'nosotros',
        component: Nosotros
    },
    {
        path: '/materiales',
        name: 'materiales',
        component: Materiales
    },
    {
        path: '/contactos',
        name: 'contactos',
        component: Contactos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router