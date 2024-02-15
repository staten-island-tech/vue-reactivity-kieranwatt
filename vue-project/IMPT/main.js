//This file is linked to the html file, and ties all of the other files together.
import './arraynotes'
import './main.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
