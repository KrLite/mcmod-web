<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';



// Use Head
onMounted(() => {
  useHead({
    title: '主站'
  })
})
</script>

<template>
  <main>
  </main>
</template>

<style scoped>
</style>
