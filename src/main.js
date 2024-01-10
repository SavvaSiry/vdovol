import {createApp} from 'vue'
import './style.less'
import App from './App.vue'
import {createYmaps} from "vue-yandex-maps";

const app = createApp(App);

app.use(createYmaps({
    apikey: import.meta.env.VITE_Y_API_KEY,
}));

app.mount('#app');
