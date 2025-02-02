import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import SentenceItem from './components/SentenceItem.vue'
import SentenceList from './components/SentenceList.vue'
import FileUpload from './components/FileUpload.vue'

const app = createApp(App)

app.component('SentenceItem', SentenceItem)
app.component('SentenceList', SentenceList)
app.component('FileUpload', FileUpload)

app.mount('#app')
