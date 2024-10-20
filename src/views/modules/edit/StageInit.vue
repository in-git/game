<template>
  <div class="config">
    <a-modal v-model:open="visible" centered title="场景编辑" @ok="submit">
      <a-card>
        <a-form ref="formRef" :model="form" @finish="submit">
          <a-form-item label="地图名字" name="name" required>
            <a-input allow-clear autofocus v-model:value="form.name"></a-input>
          </a-form-item>
          <a-form-item label="画布宽度" name="width" required>
            <a-input-number :max="1000" v-model:value="form.width" :min="1"></a-input-number>
          </a-form-item>
          <a-form-item label="画布高度" name="height" required>
            <a-input-number :max="900" v-model:value="form.height" :min="1"></a-input-number>
          </a-form-item>
          <a-form-item label="网格大小" name="size" required>
            <a-input-number v-model:value="form.size" :min="1"></a-input-number>
          </a-form-item>
        </a-form>
      </a-card>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';
import useStageStore from '@/store/stage';
import { useCloned } from '@vueuse/core';
import { nanoid } from 'nanoid';

const visible = ref(true);

const formRef = ref();

const form = ref<Stage>({
  size: 30,
  width: 600,
  height: 600,
  name: '',
  id: '',
  obstacles: [],
  hero: {
    left: 0,
    top: 0,
    figure: 'left',
  },
});

const submit = async () => {
  const result = await formRef.value?.validateFields();
  if (result) {
    changeVisible();
    form.value.id = nanoid();
    const store = useStageStore();
    const cloneData = useCloned(form.value).cloned.value;
    store.$state.historyList.push(cloneData);
    stageConfig.value = cloneData;

    formRef.value?.resetFields();
  }
};
const changeVisible = () => {
  visible.value = !visible.value;
};

defineExpose<{
  changeVisible: Function;
}>({
  changeVisible,
});
</script>

<style lang="scss" scoped></style>
