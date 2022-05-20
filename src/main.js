/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { createSSRApp } from 'vue'
import App from './App.vue'

const app = createSSRApp(App);
app.mount('#app');
setTimeout(() => {
  app.unmount();
  console.log('[main.js] app.unmount() called');
}, 1000);