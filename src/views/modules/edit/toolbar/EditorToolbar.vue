<template>
  <div class="">
    <div class="flex flex-col gap-4">
      <div class="font-bold text-[1.5rem] flex justify-between">
        <div>地图编辑</div>
      </div>
      <div class="flex justify-between px-4 bg-slate-50 py-2">
        <div class="flex gap-4">
          <a-button
            :type="item.type === paintConfig.obstacleType ? 'primary' : 'default'"
            shape="round"
            v-for="item in obstacleTypeList"
            @click="selectObstacle(item.type)"
          >
            {{ item.label }}
          </a-button>
        </div>

        <a-tooltip title="画布设置">
          <a-button shape="circle" type="ghost" @click="openStageConfig">
            <template #icon>
              <SettingOutlined />
            </template>
          </a-button>
        </a-tooltip>
      </div>

      <WallConfig v-if="paintConfig.obstacleType === 'wall'" />
      <Monster v-else-if="paintConfig.obstacleType === 'monster'"></Monster>
    </div>
  </div>
</template>

<script setup lang="ts">
import { obstacleTypeList, paintConfig } from '../data/config';
import WallConfig from './WallConfig.vue';
import Monster from './Monster.vue';

const selectObstacle = (type: ObstacleType) => {
  paintConfig.value.obstacleType = type;
};

const emit = defineEmits(['displaysStageConfig']);
const openStageConfig = () => {
  emit('displaysStageConfig');
};
</script>

<style lang="scss" scoped></style>
