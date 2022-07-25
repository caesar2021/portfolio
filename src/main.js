import { createApp } from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'

import './index.css'
import 'vue-fullpage.js/dist/style.css'



createApp(App)
	.use(VueFullPage)
	.mount('#app')
