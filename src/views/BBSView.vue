<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';



// Use Head
onMounted(() => {
  useHead({
    title: '社群'
  })
})
</script>

<template>
  <main></main>
</template>
