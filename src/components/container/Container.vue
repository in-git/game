<template>
  <div
    class="w-full h-full relative grid-container"
    id="grid-container"
    :style="style"
    ref="gridRef"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import { setContainerSize } from '@/data/stage';
import { CSSProperties } from 'vue';

const gridRef = ref<HTMLElement>();

onMounted(() => {
  if (gridRef.value) {
    const { width, height } = gridRef.value.getBoundingClientRect();
    if (stageConfig.value.width === 0 && stageConfig.value.height === 0) {
      setContainerSize(width, height);
    }
  }
});

const style = computed((): CSSProperties => {
  return {
    width: `${stageConfig.value.width}px`,
    height: `${stageConfig.value.height}px`,
  };
});
</script>

<style lang="scss" scoped>
.grid-container {
  border: 1px solid rgb(43, 42, 42);
  background: #00000046;
}
</style>
