<template>
  <div
    class="w-full h-full flex justify-center items-center bg-blue-950 relative"
    @click="createAndDeleteHero"
    @mousedown="moveToCreateHero"
  >
    <Container>
      <GridLines />
      <Obstacle @select="del" />
      <StageInit ref="stageRef" />
    </Container>
    <div class="sidebar edit-toolbar bg-white absolute right-4 top-4 p-4">
      <EditorToolbar @displays-stage-config="stageRef?.changeVisible()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { roundPosition } from '@/utils/core/math';
import StageInit from './StageInit.vue';
import EditorToolbar from './toolbar/EditorToolbar.vue';
import { createObstacle, hasTargetObstacle } from '@/data/obstacle';
import { paintConfig } from './data/config';
import { stageConfig } from '@/data/data';

const stageRef = ref<InstanceType<typeof StageInit> | null>(null);

const isInner = (): boolean => {
  const evt = window.event as MouseEvent;
  const targetEl = evt.target as HTMLElement;
  return !!targetEl.closest('#grid-container');
};
/* 刷墙模式 */
const moveToCreateHero = () => {
  if (!isInner()) {
    return;
  }
  const mousemove = (e: MouseEvent) => {
    if (!isInner()) {
      return;
    }
    const { x, y } = roundPosition(e);
    createObstacle({
      x,
      y,
      type: paintConfig.value.obstacleType,
      id: '',
      image: paintConfig.value.image,
      pos: paintConfig.value.pos,
    });
  };
  const mouseup = () => {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  };
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
};
/* 创建删除 */
const createAndDeleteHero = (e: MouseEvent) => {
  if (!isInner()) {
    return;
  }
  const { x, y } = roundPosition(e);
  let target = { x, y };

  if (!hasTargetObstacle(target)) {
    createObstacle({
      x,
      y,
      type: paintConfig.value.obstacleType,
      id: '',
      image: paintConfig.value.image,
      pos: paintConfig.value.pos,
    });
  }
};

const del = (item: Obstacle) => {
  stageConfig.value.obstacles = stageConfig.value.obstacles.filter(v => v.id != item.id);
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 400px;
  border-radius: 12px;
}
</style>
