import { createSSRApp } from 'vue'
import App from './App.vue'

console.log('[main.js]');
const app = createSSRApp(App);
app.mount('#app');
setTimeout(() => {
  app.unmount();
  console.log('[main.js] app.unmount() called');
}, 1000);