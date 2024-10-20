<template>
  <div>
    <div class="monster-list grid grid-cols-6 gap-2">
      <template v-for="(item, k) in list">
        <div
          @click="select(item, n)"
          :class="{
            active: item === paintConfig.image && paintConfig.pos === n,
          }"
          class="h-[32px] monster w-[32px] cursor-pointer"
          :style="style(item, n)"
          v-for="n in 4"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { paintConfig } from '../data/config';

const monsterModules = import.meta.glob('@/assets/monster/*.png');

let list = ref<string[]>([]);

function extractDynamicValue(path: string): string | null {
  const regex = /\/([^\/]+)\.png$/;
  const match = path.match(regex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}
Object.keys(monsterModules).forEach(path => {
  const name = extractDynamicValue(path);
  if (name) list.value.push(path);
});
const select = (monster: string, x: number) => {
  paintConfig.value.image = monster;
  paintConfig.value.pos = x;
};
const style = (monster: string, index: number) => {
  return {
    backgroundImage: `url(${monster})`,
    backgroundPosition: `0px ${index * 32}px`,
  };
};
</script>

<style lang="scss" scoped>
.active {
  outline: 1px solid var(--primary);
}
</style>
