<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Fields
const date = new Date()

// Refs
const image = ref({ type: 1, index: 1 })
const translation = ref(0)

// Hooks
onMounted(() => {
  image.value.type = getImageType(date)
  image.value.index = getImageIndex(date)
})

// Functions
function getImageType(date: Date) {
  const dateString = date.toISOString().split('T')[0]
  const seed = parseInt(dateString.replace(/-/g, ''), 10)
  return getRandomNumber(seed, 1, 2)
}

function getRandomNumber(seed: number, min: number, max: number) {
  const range = max - min + 1
  return (seed % range) + min
}

function getImageIndex(date: Date) {
  const hours = date.getHours()
  if (hours <= 8) return 1
  if (hours <= 13) return 2
  if (hours <= 18) return 3
  return 4
}

function onMouseMove(event: MouseEvent) {
	
}
</script>

<template>
  <Teleport to="body">
    <div class="panorama" @mousemove="onMouseMove">
      <img :src="`panorama/${image.type}/${image.index}.jpg`" />
    </div>
  </Teleport>
</template>

<style scoped>
.panorama {
  overflow: hidden;
  display: flex;
  justify-content: center;

  > img {
    width: auto;
    height: 100%;
    transform: translateX(v-bind('translation'));
    transition: translation 0.3s ease;
  }
}
</style>

<style>
.panorama {
  width: 100%;
  height: 100%;
  grid-row: 2;

  @media (max-width: 768px) {
    grid-row: 1 / 3;
  }
}

#app {
  grid-row: 3 !important;
}
</style>
