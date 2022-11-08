import { createRouter, createWebHashHistory } from 'vue-router'

import Main from "@/pages/Main"
import Database from "@/pages/Database"
import About from "@/pages/About"

const routes =[
    {
        path: '/',
        component: Main,
        name: 'main'
    },
    {
        path: '/database/:id?',
        component: Database,
        name: 'database'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router