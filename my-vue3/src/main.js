// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import Alpine from 'alpinejs'

const app = createApp(App)
registerPlugins(app)

// app.Alpine = Alpine
// Alpine.start()

window.Alpine = Alpine
Alpine.start()

app.mount('#app')
