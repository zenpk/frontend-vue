import {createRouter, createWebHashHistory} from "vue-router";
import Page1 from '../pages/1.vue'
import Page2 from '../pages/2.vue'

const routes = [
    {
        path: '/',
        name: 'Page1',
        component: Page1
    },
    {
        path: '/1',
        name: 'Page1',
        component: Page1
    },
    {
        path: '/2',
        name: 'Page2',
        component: Page2
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
