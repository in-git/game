<template>
  <div class="grid-items bg-gray-50 h-full relative flex justify-center items-center">
    <Container>
      <GridLines />
      <Hero />
      <Obstacle />
    </Container>
  </div>
</template>

<script setup lang="ts">
import '@/data/event';
import Hero from './hero/Hero.vue';
</script>

<style lang="scss" scoped></style>
