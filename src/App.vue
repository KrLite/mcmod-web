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
  <div class="background"></div>

  <header>
    <a class="grid-logo" href="/"><LogoComponent class="logo"></LogoComponent></a>
    <div class="grid-nav">
      <div class="nav" v-for="nav in navs" :key="nav.path">
        <RouterLink :to="nav.path">
          <p>{{ nav.name }}</p>
        </RouterLink>
      </div>
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
  height: 4em;
  max-height: 100vh;
  background: var(--mcmod-c-black);
  display: grid;
  grid-template-columns: 8.5rem 8.5rem 1fr 8.5rem;
  box-shadow: 0 1px 5px #333;
}

.grid-logo {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 2 / 3;
}

.grid-nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 3 / 4;
  overflow: scroll;
  
  --mask: linear-gradient(to right,
  rgba(0, 0, 0, 1) calc(100% - 2.5rem), rgba(0, 0, 0, 0) 100%) 100% 100% / 100% 100% repeat-y;
  mask: var(--mask);
}

.grid-footnote {
  grid-column: 4 / 5;
}

.logo {
  height: 2rem;
}

.nav {
  height: 100%;
  min-width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.5s ease;
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

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  transition: all 0.5s ease;
}
</style>
