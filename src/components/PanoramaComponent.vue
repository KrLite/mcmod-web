<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Fields
const date = new Date()
var translationTarget = 0

// Reactives
const panorama = ref<HTMLElement | null>(null)
const img = ref<HTMLImageElement | null>(null)

// Refs
const imageSrc = ref({ type: 1, index: 1 })
const translation = ref(0)

// Hooks
onMounted(() => {
  imageSrc.value.type = getImageType(date)
  imageSrc.value.index = getImageIndex(date)
})

function updateTranslation() {
	translation.value += (translationTarget - translation.value) * 0.15

	requestAnimationFrame(updateTranslation)
}
onMounted(() => requestAnimationFrame(updateTranslation))

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
  if (panorama.value && img.value) {
    const panoramaRect = panorama.value.getBoundingClientRect()
    const imgRect = img.value.getBoundingClientRect()
    const x = event.clientX

    const maxShift =
      panoramaRect.width > imgRect.width ? 0 : Math.abs(panoramaRect.width - imgRect.width) / 2.0
    const percentage = (x / panoramaRect.width) * 2 - 1

    const shift = Math.min(maxShift, 25) * percentage
    translationTarget = shift
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="panorama" ref="panorama" @mousemove="onMouseMove">
      <img ref="img" :src="`panorama/${imageSrc.type}/${imageSrc.index}.jpg`" />
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
    transform: translateX(calc(v-bind('translation') * 1px));
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
