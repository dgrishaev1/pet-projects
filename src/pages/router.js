import Main from './Main.vue'
import Create from './Create.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const ROUTES = {
    MAIN: '/',
    CREATE: '/create',
    READ: '/read/:id',
    UPDATE: '/update/:id',
}

const routesConfig = [
    { path: ROUTES.MAIN, name: 'Главная', component: Main },
    { path: ROUTES.CREATE, name: 'Создание публикации', component: Create },
    {
        path: ROUTES.READ,
        name: 'Публикация',
        template: '<div>Публикация</div>',
    },
    {
        path: ROUTES.UPDATE,
        name: 'Редактирование публикации',
        template: '<div>Редактирование публикации</div>',
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routesConfig,
})
