import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, Upload } from 'ant-design-vue';
const app = createApp(App)
app.use(Button)
app.use(Upload)
app.mount('#app')
