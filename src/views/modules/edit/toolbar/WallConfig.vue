<template>
    <div class="editor-tabs">
      <div class="wall-list p-4">
        <div class="font-bold text-[1.3rem] mb-4">墙体风格</div>
        <ul class="flex gap-4">
          <li
            v-for="item in paintConfigList"
            class="text-center"
            :key="item.value"
            @click="setStyle(item.value)"
          >
            <div class="p-[1px]" :class="{ 'active bg-blue-200': item.value === paintConfig.image }">
              <img :src="item.value" width="32" />
            </div>

            <div class="text-gray-500">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { paintConfig, paintConfigList } from '../data/config';

  const setStyle = (item: string) => {
    paintConfig.value.image = item;
  };
  </script>

  <style lang="scss" scoped>
  .wall-list {
    border: 1px solid var(--border-color);
    img {
      border: 1px solid transparent;
    }
  }
  .active {
    outline: 1px solid var(--primary);
  }
  </style>
