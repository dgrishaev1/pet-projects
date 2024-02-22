import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './style.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './pages/router.js'

const app = createApp(App)
app.use(router)
app.use(Buefy)
app.mount('#app')
