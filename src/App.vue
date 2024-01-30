<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoComponent from '@/components/logo/LogoComponent.vue'
import { onMounted, onUnmounted, ref } from 'vue'

// Fields
const navs = [
  { path: '/', name: '主站' },
  { path: '/bbs', name: '社群' },
  { path: '/server', name: '找服玩' },
  { path: '/modpack', name: '整合包' },
  { path: '/utility', name: '实用工具' },
  { path: '/feature', name: '特性' }
]
const mediaQueryMobile = window.matchMedia('(max-width: 768px)')

// Refs
const onMobile = ref(mediaQueryMobile.matches)
const navExpanded = ref(!onMobile.value)

// Hooks
function updateScreenWidth(event: UIEvent) {
  const wasOnMobile = onMobile.value
  onMobile.value = mediaQueryMobile.matches
  if (onMobile.value === false) navExpanded.value = true
  else if (wasOnMobile === false) navExpanded.value = false
}
onMounted(() => window.addEventListener('resize', updateScreenWidth))
onUnmounted(() => window.removeEventListener('resize', updateScreenWidth))
</script>

<template>
  <Teleport to="body">
    <div class="background"></div>

    <Transition :name="onMobile ? 'transition-vignette' : '_'">
      <div v-if="navExpanded" class="vignette"></div>
    </Transition>

    <Transition :name="onMobile ? 'transition-mobile' : '_'">
      <header v-if="navExpanded">
        <a class="grid-logo dim-when-active" href="/"
          ><LogoComponent class="logo"></LogoComponent
        ></a>

        <div class="grid-nav">
          <div class="nav dummy"></div>
          <div class="nav" v-for="nav in navs" :key="nav.path">
            <RouterLink :to="nav.path">
              <p>{{ nav.name }}</p>
            </RouterLink>
          </div>
          <div class="nav dummy"></div>
        </div>

        <div class="grid-footnote">
          <a href="/" class="dim-when-active">
            <fa-icon :icon="['fs', 'right-to-bracket']" :size="onMobile ? '2x' : 'lg'"></fa-icon>
          </a>
          <a href="https://github.com/KrLite/Web.mcmod.cn" class="dim-when-active">
            <fa-icon :icon="['fab', 'github']" :size="onMobile ? '2x' : 'lg'"></fa-icon>
          </a>
        </div>

        <div v-if="onMobile" class="grid-close dim-when-active" @click="navExpanded = false">
          <fa-icon class="icon" :icon="['fs', 'arrow-left']" size="2x"></fa-icon>
        </div>
      </header>

      <header v-else class="expand" @click="navExpanded = true"></header>
    </Transition>
  </Teleport>

  <RouterView />

  <Teleport to="body">
    <footer>
      <div></div>
    </footer>
  </Teleport>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  transition: all 0.5s ease;
  z-index: -1;
}

.dim-when-active:active {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

footer {
  position: relative;
  bottom: 0;
  left: 0;
  height: 16rem;
  background: var(--color-background-soft);
  padding: 2rem 8.5rem 4rem 8.5rem;

  div {
    width: 100%;
    height: 100%;
    border: 3px solid yellow;
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  background: var(--mcmod-c-black);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 8.5rem 1fr 8.5rem;
  box-shadow: 0 1px 5px #333;
}

.grid-logo {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1;
  padding-left: 2rem;
}

.grid-nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 2;
  overflow: scroll;

  --mask: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 1rem,
      rgba(0, 0, 0, 1) calc(100% - 1rem),
      rgba(0, 0, 0, 0) 100%
    )
    100% 100% / 100% 100% repeat-y;
  mask: var(--mask);
}

.grid-footnote {
  grid-column: 3;
  padding-left: 0;
  padding-right: 2rem;
  display: flex;
  flex-direction: row-reverse;
  column-gap: 0.5rem;
  align-items: center;

  a {
    color: var(--mcmod-color-white);
  }
}

.logo {
  height: 2rem;
}

.nav {
  height: 100%;
  min-width: 6rem;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease;
}

.nav.dummy {
  min-width: 1rem;
  width: 1rem;
}

.nav:not(.dummy):hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.nav:has(.router-link-active) {
  background-color: rgba(0, 0, 0, 0.2);
}

.nav a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    color: var(--mcmod-c-white);
    text-decoration: none;
  }
}

.nav a:active {
  text-decoration: none;
}

.nav a.router-link-exact-active > p {
  font-weight: bolder;
}

@media (max-width: 768px) {
  footer {
    padding-left: 5%;
    padding-right: 5%;
  }

  header {
    height: 100vh;
    width: auto;
    display: grid;
    grid-template-columns: 8.5rem 1fr 8.5rem;
    grid-template-rows: 8.5rem 1fr 5rem;
  }

  .vignette {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.25;
  }

  .expand {
    width: 3rem;
    height: 3rem;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }

  .grid-logo {
    grid-row: 1;
    grid-column: 1;
  }

  .grid-close {
    grid-row: 1;
    grid-column: 2 / 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;

    .icon {
      color: var(--mcmod-c-white);
    }
  }

  .grid-nav {
    grid-row: 2;
    grid-column: 1 / 4;
    flex-direction: column;

    --mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 1rem,
        rgba(0, 0, 0, 1) calc(100% - 1rem),
        rgba(0, 0, 0, 0) 100%
      )
      100% 100% / 100% 100% repeat-x;
  }

  .grid-footnote {
    padding-left: 2rem;
    padding-right: 0;
    grid-row: 3;
    grid-column: 1 / 4;
    flex-direction: row;
    column-gap: 1rem;
  }

  .nav {
    min-width: none;
    min-height: 5rem;
    width: 100%;
    height: auto;
    padding: 0 2rem 0 2rem;
    justify-content: flex-start;
  }

  .nav.dummy {
    min-width: none;
    min-height: 1rem;
    width: 100%;
    height: 1rem;
  }

  .nav a {
    justify-content: flex-start;

    p {
      font-size: 1.5rem;
    }
  }
}

.transition-mobile-enter-from,
.transition-mobile-leave-to {
  transform: translateX(-100%);
}
.transition-mobile-enter-active,
.transition-mobile-leave-active {
  transition: transform 0.3s ease;
}
.transition-mobile-enter-active {
  transition-delay: 0.2s;
}

.transition-vignette-enter-from,
.transition-vignette-leave-to {
  opacity: 0;
}
.transition-vignette-enter-active,
.transition-vignette-leave-active {
  transition: opacity 0.3s ease;
}
</style>
