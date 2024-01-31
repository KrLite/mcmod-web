<script setup lang="ts">
// Definitions
const props = defineProps({
  index: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <img class="pixelated" :src="`assets/minecraft/textures/item/clock_${index.toString().padStart(2, '0')}.png`" />
</template>
