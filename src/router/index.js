import {createRouter, createWebHashHistory} from "vue-router";
import Page1 from "../pages/1.vue"
import Page2 from "../pages/2.vue"
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"

const routes = [
    {
        path: "/",
        name: "Page1",
        component: Page1
    },
    {
        path: "/1",
        name: "Page1",
        component: Page1
    },
    {
        path: "/2",
        name: "Page2",
        component: Page2
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
