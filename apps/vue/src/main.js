import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IGNITE_SDK_URL } from '@nsftx/nxg-sports-micro-frontends-example-shared/constants'
import { createIntegratorInstance } from '@nsftx/nxg-sports-micro-frontends-example-shared/integrator'

import '@nsftx/nxg-sports-micro-frontends-example-shared/style'

// Load Ignite SDK
const script = document.createElement('script')
script.src = IGNITE_SDK_URL
script.onload = () => createIntegratorInstance(router.push)
document.head.appendChild(script)

const app = createApp(App)
app.use(router)
app.mount('#app')
