<template>
  <div
    class="absolute z-10 hero flex justify-center items-center"
    :style="{
      height: `${stageConfig.size}px`,
      width: `${stageConfig.size}px`,
      left: `${stageConfig.hero.left * stageConfig.size}px`,
      top: `${stageConfig.hero.top * stageConfig.size}px`,
    }"
  >
    <div class="image w-[32px] h-[32px]" :style="heroStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { hreoGifStep, stageConfig } from '@/data/data';
import { getHeroFigure } from '@/data/hero';

const heroStyle = computed(() => {
  return {
    'background-position': `${hreoGifStep.value * 32}px ${getHeroFigure()}`,
  };
});
</script>

<style lang="scss" scoped>
.hero {
  .image {
    background: url('@/assets/hero.png');
  }
  transition: all 0.2s;
  pointer-events: none;
}
</style>
