import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@nsftx/nxg-sports-micro-frontends-example-shared/style'

const app = createApp(App)

app.use(router)

app.mount('#app')
