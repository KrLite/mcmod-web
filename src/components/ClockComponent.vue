<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import IconClock from '@/components/icons/IconClock.vue'

// Refs
const date = ref(new Date())
const index = computed(() => {
  const percentage = date.value.getHours() / 24.0 + date.value.getMinutes() / (60.0 * 24.0)
  return Math.floor(percentage * 64)
})
const time = computed(() => `${date.value.getHours()} : ${date.value.getMinutes()}`)

// Hooks
function updateDate() {
  date.value = new Date()
}
onMounted(() => setInterval(updateDate, 1000))
</script>

<template>
  <div class="container">
    <p>{{ time }}</p>
    <IconClock :index="index"></IconClock>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: baseline;
  column-gap: 7.5px;

  > p {
    font-family: 'Minecraft';
	font-size: 1.2rem;
    color: var(--mcmod-c-white);
    mix-blend-mode: difference;
  }

  > img {
	height: 1.5rem;
	object-fit: contain;
	transform: translateY(3.5px);
  }
}
</style>
