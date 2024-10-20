<template>
  <div
    v-for="item in obstacleList"
    :key="item.x"
    @click.stop="selete(item)"
    @mousemove.stop=""
    class="absolute bg-black obstacle"
    :style="{
      left: `${item.x * stageConfig.size}px`,
      top: `${item.y * stageConfig.size}px`,
      height: `${stageConfig.size}px`,
      width: `${stageConfig.size}px`,
    }"
  ></div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import { obstacleList } from '@/data/obstacle';

const emit = defineEmits(['select']);
const selete = (item: Obstacle) => {
  emit('select', item);
};
</script>

<style lang="scss" scoped>
.obstacle{
  background:url('../../assets/Obstacle-black.png');
  background-size: cover;
}
</style>
