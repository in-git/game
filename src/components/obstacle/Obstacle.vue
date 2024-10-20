<template>
  <template v-for="item in stageConfig.obstacles" :key="item.x">
    <div
      @click.stop="selete(item)"
      @mousemove.stop=""
      v-if="item.type === 'wall'"
      class="absolute obstacle"
      :style="wallStyle(item)"
    ></div>
    <div    @click.stop="selete(item)" v-else-if="item.type === 'monster'" :style="monsterStyle(item)" class="absolute "></div>
  </template>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import { CSSProperties } from 'vue';

const emit = defineEmits(['select']);
const selete = (item: Obstacle) => {
  emit('select', item);
};

const wallStyle = (item: Obstacle): CSSProperties => {
  return {
    left: `${item.x * stageConfig.value.size}px`,
    top: `${item.y * stageConfig.value.size}px`,
    height: `${stageConfig.value.size}px`,
    width: `${stageConfig.value.size}px`,
    backgroundImage: ` url('${item.image}')`,
  };
};

const monsterStyle = (item: Obstacle): CSSProperties => {
  return {
    ...wallStyle(item),
    backgroundImage: `url(${item.image})`,
    backgroundPosition: `0px ${item.pos * 32}px`,
  };
};
</script>

<style lang="scss" scoped>
.obstacle {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
