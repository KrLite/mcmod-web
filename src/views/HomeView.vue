<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue'

import PanoramaComponent from '@/components/PanoramaComponent.vue'
import ClockComponent from '@/components/ClockComponent.vue'

// Use Head
onMounted(() => {
  useHead({
    title: '主站'
  })
})
</script>

<template>
  <main>
    <PanoramaComponent
      href="https://space.bilibili.com/438147311/dynamic"
      target="_blank"
    ></PanoramaComponent>
    <ClockComponent class="clock"></ClockComponent>
    <div class="long"></div>
  </main>
</template>

<style scoped>
.clock {
  position: absolute;
  top: calc(var(--header-height) + 1rem);
  right: 8.5rem;
  z-index: 1;

  @media (max-width: 768px) {
	top: 1rem;
    right: 5%;
  }
}

.long {
  width: 100%;
  height: 500vh;
  border: 3px solid aqua;
}
</style>
