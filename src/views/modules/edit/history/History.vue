<template>
  <div>
    <div class="flex flex-col gap-4 mt-4 history-list p-4">
      <div class="font-bold text-[1.5rem]">历史记录</div>
      <ul class="max-h-[200px] overflow-auto" v-if="historyList.length > 0">
        <li
          v-for="item in historyList"
          @click="select(item)"
          :class="{ 'active ': item.id === stageConfig.id }"
          class="px-4 flex justify-between items-center item hover:bg-gray-100 cursor-pointer"
        >
          <div>
            {{ item.name || '没有名称' }}
          </div>
          <div class="opacity-0 del">
            <a-popconfirm @confirm="del(item.id)" title="确定删除吗" placement="bottomLeft">
              <a-button shape="circle" type="ghost">
                <DeleteOutlined />
              </a-button>
            </a-popconfirm>
          </div>
        </li>
      </ul>
      <a-empty v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import useStageStore from '@/store/stage';
import { DeleteOutlined } from '@ant-design/icons-vue';

const store = useStageStore();

const del = (id: string) => {
  store.$state.historyList = store.$state.historyList.filter(e => e.id !== id);
};

const select = (item: Stage) => {
  stageConfig.value = item;
};

const historyList = computed(() => store.$state.historyList);
</script>

<style lang="scss" scoped>
.item {
  border-radius: var(--radius);
  &:hover {
    .del {
      opacity: 1;
    }
  }
}
.history-list {
  border: 1px solid var(--border-color);
}
.active {
  background-color: var(--primary);
  color: white;
}
</style>
