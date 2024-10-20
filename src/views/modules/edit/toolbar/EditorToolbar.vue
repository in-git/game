<template>
  <div class="">
    <div class="flex flex-col gap-4">
      <div class="font-bold text-[1.5rem] flex justify-between">
        <div>工具箱</div>

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
          <a-button
            shape="circle"
            @click="displayHistory = !displayHistory"
            :type="displayHistory ? 'primary' : 'ghost'"
          >
            <template #icon>
              <HistoryOutlined />
            </template>
          </a-button>
          <a-button shape="circle" type="ghost" @click="openStageConfig">
            <template #icon>
              <SettingOutlined />
            </template>
          </a-button>
        </a-tooltip>
      </div>
      <History v-if="displayHistory" />
      <WallConfig v-if="paintConfig.obstacleType === 'wall'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HistoryOutlined } from '@ant-design/icons-vue';
import { obstacleTypeList, paintConfig } from '../data/config';
import WallConfig from './WallConfig.vue';
import History from '../history/History.vue';

const displayHistory = ref(false);

const selectObstacle = (type: Paint) => {
  paintConfig.value.obstacleType = type;
};


const emit = defineEmits(['displaysStageConfig']);
const openStageConfig = () => {
  emit('displaysStageConfig');
};
</script>

<style lang="scss" scoped></style>
