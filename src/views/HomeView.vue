<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue'

import PanoramaComponent from '@/components/PanoramaComponent.vue'

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
    <div class="long"></div>
  </main>
</template>

<style scoped>
.long {
  width: 100%;
  height: 500vh;
  border: 3px solid aqua;
}
</style>
