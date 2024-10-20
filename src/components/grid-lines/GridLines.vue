<template>
  <div class="h-full pointer-events-none">
    <div
      v-for="item in getLineX()"
      :style="{ left: `${item * stageConfig.size}px` }"
      class="w-[1px] h-full bg-blue-200 absolute"
    ></div>
    <div
      v-for="item in getLineY()"
      :style="{ top: `${item * stageConfig.size}px` }"
      class="h-[1px] w-full bg-blue-200 absolute"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import { getLineX, getLineY } from '@/data/utils';

</script>

<style lang="scss" scoped></style>
