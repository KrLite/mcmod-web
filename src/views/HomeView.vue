<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';

import PanoramaComponent from '@/components/PanoramaComponent.vue';



// Use Head
onMounted(() => {
  useHead({
    title: '主站'
  })
})
</script>

<template>
  <main>
	<PanoramaComponent></PanoramaComponent>
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
