import {createApp} from 'vue'
import './style.less'
import App from './App.vue'
import {createYmaps} from "vue-yandex-maps";
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'
import router from "./router.js";

const app = createApp(App)
    .use(createMetaManager())
    .use(router)
    .use(metaPlugin)
    .use(createYmaps({
        apikey: import.meta.env.VITE_Y_API_KEY,
        // apikey: 'cb9e76f3-8052-4d2c-8fc8-4cd3b4a8c405',
    }));

app.mount('#app');
