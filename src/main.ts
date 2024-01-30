import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import { createHead, useHead } from '@unhead/vue'

const head = createHead()
useHead({
  title: '主页',
  titleTemplate: '%s - MC百科',
  meta: [
    {
      name: 'description',
      content:
        '最大的Minecraft中文Mod百科'
    },
    {
      name: 'keywords',
      content:
        'minecraft, mod, game, wiki'
    }
  ]
})
app.use(head)

app.mount('#app')
