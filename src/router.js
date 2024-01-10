import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HomePage from "./components/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:catchAll(.*)',
            component: HomePage,
        },
    ]
});

export default router;
