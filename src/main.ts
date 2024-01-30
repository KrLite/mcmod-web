import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import { createHead, useHead } from '@unhead/vue'

const head = createHead()
useHead({
  title: '主站',
  titleTemplate: '%s - MC百科',
  meta: [
    {
      name: 'description',
      content: '最大的Minecraft中文Mod百科'
    },
    {
      name: 'keywords',
      content: 'minecraft, mod, game, wiki'
    }
  ]
})
app.use(head)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
	faArrowLeft,
	faRightToBracket
} from '@fortawesome/free-solid-svg-icons'

import {
	faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
	faArrowLeft,
	faRightToBracket,
	faGithub
)
app.component('fa-icon', FontAwesomeIcon)

app.mount('#app')
