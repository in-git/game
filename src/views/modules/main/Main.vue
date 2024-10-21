<template>
  <div class="grid-items bg-gray-50 h-full relative flex justify-center items-center">
    <Container>
      <Hero />
      <Obstacle />
    </Container>
  </div>
</template>

<script setup lang="ts">
import '@/data/event';
import Hero from './hero/Hero.vue';
import { stageConfig } from '@/data/data';

stageConfig.value.obstacles.forEach(e => {
  if (e.type === 'monster') {
    console.log('给怪物添加检测事件');
  }
});
</script>

<style lang="scss" scoped></style>
