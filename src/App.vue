<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoComponent from '@/components/logo/LogoComponent.vue'

const navs = [
  { path: '/', name: '主站' },
  { path: '/bbs', name: '社群' },
  { path: '/server', name: '找服玩' },
  { path: '/modpack', name: '整合包' },
  { path: '/utility', name: '实用工具' },
  { path: '/feature', name: '特性' }
]
</script>

<template>
  <header>
    <a class="nav" href="/"> <LogoComponent class="logo"></LogoComponent></a>
    <div class="nav" v-for="(nav, index) in navs" :key="nav.path">
      <RouterLink :to="nav.path">
        <p>{{ nav.name }}</p>
      </RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3em;
  max-height: 100vh;
  background: var(--mcmod-c-black);
  padding: 0 8.5rem 0 8.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-shadow: 0 1px 5px #333;
}

.logo {
  height: 70%;
  min-width: 7.5rem;
}

.nav {
  height: 100%;
  min-width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.4s ease;
}

.nav:has(.router-link-active) {
  background-color: rgba(0, 0, 0, 0.1);
}

.nav a {
  font-size: 1rem;
  color: var(--mcmod-c-white);
  text-decoration: none;
}

.nav a.router-link-exact-active > p {
  font-weight: bolder;
}

@media (max-width: 768px) {
	header {
		height: 100%;
		width: calc(100% - 3rem);
		flex-direction: column;
		padding: 2rem 0 2rem 0;
	}

	.logo {
		min-width: none;
		width: 85%;
		height: 3rem;
	}

	.nav {
		min-width: none;
		width: 100%;
		height: 5rem;
		padding: 0 2rem 0 2rem;
		justify-content: flex-start;
	}

	.nav a {
		font-size: 1.5rem;
	}
}
</style>
