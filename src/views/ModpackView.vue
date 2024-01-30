<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';



// Use Head
onMounted(() => {
  useHead({
    title: '整合包'
  })
})
</script>

<template>
  <main></main>
</template>
