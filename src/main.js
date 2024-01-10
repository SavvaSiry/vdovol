import {createApp} from 'vue'
import './style.less'
import App from './App.vue'
import {createYmaps} from "vue-yandex-maps";

const app = createApp(App);

app.use(createYmaps({
    apikey: '396bae33-4d11-44e3-9e3b-ca7fab324cfe',
}));

app.mount('#app');
