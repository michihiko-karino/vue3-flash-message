import { createApp } from 'vue';
import '~/style.css';
import App from '~/App.vue';
import { messagePlugin } from '~/messagePlugin';

createApp(App).use(messagePlugin).mount('#app');
