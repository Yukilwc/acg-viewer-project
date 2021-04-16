import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/manga/allList/index.vue')
    },
    {
        path: '/manga/allList',
        name: 'manga-allList',
        component: () => import('../pages/manga/allList/index.vue')
    },
    {
        path: '/manga/detail',
        name: 'manga-detail',
        component: () => import('../pages/manga/detail/index.vue')
    },
    {
        path: '/manga/viewer',
        name: 'manga-viewer',
        component: () => import('../pages/manga/viewer/index.vue')
    },
    {
        // path: '*', https://stackoverflow.com/questions/63526486/vue-router-catch-all-wildcard-not-working
        path: "/:catchAll(.*)",
        component: () => import('../pages/manga/allList/index.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router