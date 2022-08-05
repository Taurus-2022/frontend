import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLuckyCanvas from '@lucky-canvas/vue';
import { Icon } from 'vant';

import App from './App.vue';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(VueLuckyCanvas);
app.use(Icon);
app.mount('#app');
