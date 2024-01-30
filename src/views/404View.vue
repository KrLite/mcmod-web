<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';



// Use Head
onMounted(() => {
  useHead({
    title: '页面不存在'
  })
})
</script>

<template>
  <main></main>
</template>
