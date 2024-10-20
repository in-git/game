<template>
  <div
    v-for="item in stageConfig.obstacles"
    :key="item.x"
    @click.stop="selete(item)"
    @mousemove.stop=""
    class="absolute obstacle"
    :style="style(item)"
  ></div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import { CSSProperties } from 'vue';

const emit = defineEmits(['select']);
const selete = (item: Obstacle) => {
  emit('select', item);
};

const style = (item: Obstacle):CSSProperties => {
  return {
    left: `${item.x * stageConfig.value.size}px`,
    top: `${item.y * stageConfig.value.size}px`,
    height: `${stageConfig.value.size}px`,
    width: `${stageConfig.value.size}px`,
    backgroundImage: ` url('${item.image}')`,
  };
};
</script>

<style lang="scss" scoped>
.obstacle {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
