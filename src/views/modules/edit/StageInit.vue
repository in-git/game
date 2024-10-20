<template>
  <div class="config">
    <a-modal v-model:open="visible" centered title="场景编辑" @ok="visible = false">
      <a-card>
        <a-form :model="stageConfig">
          <a-form-item label="画布宽度" name="width">
            <a-input-number v-model:value="stageConfig.width" :min="1"></a-input-number>
          </a-form-item>
          <a-form-item label="画布高度" name="height">
            <a-input-number v-model:value="stageConfig.height" :min="1"></a-input-number>
          </a-form-item>
          <a-form-item label="网格大小" name="size">
            <a-input-number v-model:value="stageConfig.size" :min="1"></a-input-number>
          </a-form-item>
        </a-form>
      </a-card>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { stageConfig } from '@/data/data';

const visible = ref(true);
</script>

<style lang="scss" scoped></style>
