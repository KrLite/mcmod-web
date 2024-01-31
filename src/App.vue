<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import LogoComponent from '@/components/logo/LogoComponent.vue'
import LogoComponentAlt from './components/logo/LogoComponentAlt.vue'

// Fields
const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
const navs = [
  { path: '/', name: '主站' },
  { path: '/bbs', name: '社群' },
  { path: '/server', name: '找服玩' },
  { path: '/modpack', name: '整合包' },
  { path: '/utility', name: '实用工具' },
  { path: '/feature', name: '特性' }
]
const footerLinks = [
  {
    name: '关于百科',
    children: [
      { path: '/', name: '百科帮助' },
      { path: '/', name: '开发日志' },
      { path: '/', name: '捐赠' }
    ]
  },
  {
    name: '关注百科',
    children: [
      { path: '/', name: '哔哩哔哩' },
      { path: '/', name: '微博' }
    ]
  },
  {
    name: '联系百科',
    children: [
      { path: '/', name: '意见反馈' },
      { path: '/', name: '电子邮件' },
      { path: '/', name: '友链申请' }
    ]
  }
]

// Refs
const onMobile = ref(mediaQueryMobile.matches)
const navExpanded = ref(!onMobile.value)
const loggedIn = ref(false)

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
      <div v-if="navExpanded" class="vignette" @click="navExpanded = false"></div>
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
          <span class="dim-when-active" @click="loggedIn = !loggedIn">
            <fa-icon
              v-if="!loggedIn"
              class="icon"
              :icon="['fs', 'right-to-bracket']"
              :size="onMobile ? '2x' : 'lg'"
            ></fa-icon>
            <fa-icon
              v-else
              class="icon"
              :icon="['fs', 'circle-user']"
              :size="onMobile ? '2x' : 'lg'"
            ></fa-icon>
          </span>

          <span v-if="loggedIn" class="dim-when-active">
            <fa-icon
              class="icon"
              :icon="['fs', 'envelope']"
              :size="onMobile ? '2x' : 'lg'"
            ></fa-icon>
          </span>

          <a href="https://github.com/KrLite/Web.mcmod.cn" class="dim-when-active">
            <fa-icon
              class="icon"
              :icon="['fab', 'github']"
              :size="onMobile ? '2x' : 'lg'"
            ></fa-icon>
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
      <LogoComponentAlt class="logo"></LogoComponentAlt>
      <div
        class="links"
        v-for="(links, index) in footerLinks"
        :key="index"
        :style="`--index: ${index + 1};`"
      >
        <ul>
          <p class="title">{{ links.name }}</p>
          <p v-for="(link, index) in links.children" :key="index">
            <a class="link" :href="link.path">
              {{ link.name }}
            </a>
          </p>
        </ul>
      </div>
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
  z-index: -10;
}

.dim-when-active:active {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

footer {
  position: relative;
  height: var(--footer-height);
  background: var(--color-background-soft);
  padding: 2rem 8.5rem 4rem 8.5rem;
  display: grid;
  grid-template: 4rem 1fr / 10rem repeat(v-bind('footerLinks.length'), 1fr);

  .logo {
    height: 100%;
    grid-area: 1 / 1 / 2 / 2;
    border: 1px solid red;
  }

  .links {
    grid-row: 1 / 3;
    grid-column: calc(var(--index) + 1);

    a,
    p {
      text-decoration: none;
      color: var(--color-text);
    }

    .title {
      font-size: 1.2rem;
      font-weight: bolder;
      margin-bottom: 0.75em;
    }

    .link {
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }

    .link:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height);
  background: var(--mcmod-c-black);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 8.5rem 1fr 8.5rem;
  box-shadow: 0 1px 5px #333;

  @media (max-width: 768px) {
    height: 100vh;
    width: auto;
    display: grid;
    grid-template-columns: 8.5rem 1fr 8.5rem;
    grid-template-rows: 8.5rem 1fr 5rem;
  }

  z-index: 10;
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

  @media (max-width: 768px) {
    grid-row: 1;
    grid-column: 1;
  }
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

  @media (max-width: 768px) {
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
}

.grid-footnote {
  grid-column: 3;
  padding-left: 0;
  padding-right: 2rem;
  display: flex;
  flex-direction: row-reverse;
  column-gap: 0.75rem;
  align-items: center;

  a {
    color: var(--mcmod-color-white);
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 0;
    grid-row: 3;
    grid-column: 1 / 4;
    flex-direction: row;
    column-gap: 1.5rem;
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

  @media (max-width: 768px) {
    min-width: none;
    min-height: 5rem;
    width: 100%;
    height: auto;
    padding: 0 2rem 0 2rem;
    justify-content: flex-start;
  }
}

.nav.dummy {
  min-width: 1rem;
  width: 1rem;

  @media (max-width: 768px) {
    min-width: none;
    min-height: 1rem;
    width: 100%;
    height: 1rem;
  }
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

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
}

.nav a:active {
  text-decoration: none;
}

.nav a.router-link-exact-active > p {
  font-weight: bolder;
}

.icon {
  color: var(--mcmod-c-white);
  user-select: none;
}

@media (max-width: 768px) {
  .vignette {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.25;
    z-index: 10;
  }

  .expand {
    width: 3rem;
    height: 3rem;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }

  .grid-close {
    grid-row: 1;
    grid-column: 2 / 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;
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
