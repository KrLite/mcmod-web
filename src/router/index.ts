import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
		path: '/:error*',
		name: '404',
		component: () => import('@/views/404View.vue')
	},
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: () => import('@/views/BBSView.vue')
    },
    {
      path: '/server',
      name: 'server',
      component: () => import('@/views/ServerView.vue')
    },
    {
      path: '/modpack',
      name: 'modpack',
      component: () => import('@/views/ModpackView.vue')
    },
    {
      path: '/utility',
      name: 'utility',
      component: () => import('@/views/UtilityView.vue')
    },
    {
      path: '/feature',
      name: 'feature',
      component: () => import('@/views/FeatureView.vue')
    }
  ]
})

export default router
