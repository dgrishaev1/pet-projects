import { createApp } from 'vue/dist/vue.esm-bundler.js'
import Buefy from 'buefy'
import App from './App.vue'
import router from './pages/router.js'

import 'buefy/dist/buefy.css'
import './assets/styles/bulma.css'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(Buefy)
app.mount('#app')
