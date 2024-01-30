<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';



// Use Head
onMounted(() => {
  useHead({
    title: '实用工具'
  })
})
</script>

<template>
  <main></main>
</template>
