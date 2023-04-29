import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import naive from 'naive-ui'
import 'vfonts/RobotoSlab.css'

import JsonViewer from 'vue-json-viewer'
const app = createApp(App)

app.use(router)
app.use(naive)
app.use(JsonViewer)


app.mount('#app')
