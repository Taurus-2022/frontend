import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLuckyCanvas from '@lucky-canvas/vue';
import { Icon } from 'vant';
import touch from 'vue3-hand-mobile';
import App from './App.vue';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(VueLuckyCanvas);
app.use(Icon);
app.use(touch);
app.mount('#app');
