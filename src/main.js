import { createApp } from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import { createI18n } from 'vue-i18n'

import './index.css'
import 'vue-fullpage.js/dist/style.css'

import messages from './i18n'

const i18n = createI18n({
	locale: "en",
	fallbackLocale: "en",
	messages
})

createApp(App)
	.use(VueFullPage)
	.use(i18n)
	.mount('#app')
