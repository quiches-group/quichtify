import { createApp } from 'vue';
import App from './App.vue';
import components from './components';
import './index.css';

createApp(App).use(components).mount('#app');
