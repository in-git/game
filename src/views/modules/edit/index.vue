<template>
  <div
    class="w-full h-full flex justify-center items-center bg-blue-950"
    @click="createAndDeleteHero"
    @mousedown="moveToCreateHero"
  >
    <Container>
      <GridLines />
      <Obstacle @select="del" />
      <StageInit />
    </Container>
  </div>
</template>

<script setup lang="ts">
import { roundPosition } from '@/utils/core/math';
import StageInit from './StageInit.vue';
import { createObstacle, hasTargetObstacle, obstacleList } from '@/data/obstacle';

const moveToCreateHero = () => {
  const mousemove = (e: MouseEvent) => {
    const { x, y } = roundPosition(e);
    createObstacle({
      x,
      y,
      type: 'wall',
      id: '',
    });
  };
  const mouseup = () => {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  };
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
};
const createAndDeleteHero = (e: MouseEvent) => {
  const { x, y } = roundPosition(e);
  let target = { x, y };

  if (!hasTargetObstacle(target)) {
    createObstacle({
      x,
      y,
      type: 'wall',
      id: '',
    });
  }
};

const del = (item: Obstacle) => {
  obstacleList.value = obstacleList.value.filter(v => v.id != item.id);
};
</script>

<style lang="scss" scoped></style>
