import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLuckyCanvas from '@lucky-canvas/vue';
import Circle, { Dialog, Icon, Button } from 'vant';
import touch from 'vue3-hand-mobile';
import App from './App.vue';
import './assets/main.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(createPinia());
app.use(VueLuckyCanvas);
app.use(Icon);
app.use(Dialog);
app.use(Button);
app.use(Circle);
app.use(touch);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
