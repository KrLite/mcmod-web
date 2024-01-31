<script setup lang="ts">
import IconBackground from './IconBackground.vue'
import IconLink from './IconLink.vue'
import IconMC from './IconMC.vue'
import IconWiki from './IconWiki.vue'
</script>

<template>
  <div class="container">
    <div class="icon">
      <IconBackground class="background"></IconBackground>
      <IconMC class="mc"></IconMC>
    </div>
    <div class="text">
      <IconWiki class="wiki"></IconWiki>
      <IconLink class="link"></IconLink>
    </div>
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

.text {
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10%;
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
  width: 100%;
  fill: var(--color-text);
}

.link {
  width: 100%;
  fill: var(--color-text);
}
</style>
