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
    { path: ROUTES.CREATE, name: 'Создание квиза', component: Create },
    {
        path: ROUTES.READ,
        name: 'Публикация квиза',
        template: '<div>Квиз</div>',
    },
    {
        path: ROUTES.UPDATE,
        name: 'Редактирование квиза',
        template: '<div>Редактирование квиза</div>',
    },
]

const DEFAULT_TITLE = 'Vue quiz'

const router = createRouter({
    history: createWebHistory(),
    routes: routesConfig,
})
router.beforeEach((to, from, next) => {
    document.title = to.name || DEFAULT_TITLE
    next()
})

export default router
