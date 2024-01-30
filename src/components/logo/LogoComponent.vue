<script setup lang="ts">
import IconBackground from './IconBackground.vue'
import IconMC from './IconMC.vue'
import IconWiki from './IconWiki.vue'
</script>

<template>
  <div class="container">
    <div class="icon">
      <IconBackground class="background"></IconBackground>
      <IconMC class="mc"></IconMC>
    </div>
    <IconWiki class="wiki"></IconWiki>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  column-gap: 6px;
}

.icon {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.background {
  height: 100%;
}

.mc {
  height: 72.5%;
  fill: var(--mcmod-c-white);
  position: absolute;
}

.wiki {
  height: 82%;
  fill: var(--mcmod-c-white);
}
</style>
