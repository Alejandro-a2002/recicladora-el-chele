import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Acercade from '../views/Acerca_de.vue'
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
        name: 'acerca_de',
        component: Acercade
    },
    {
        path: '/materiales',
        name: 'materiales',
        component: Materiales
    },
    {
        path: '/contacto',
        name: 'contactos',
        component: Contactos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router