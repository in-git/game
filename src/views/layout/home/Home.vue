<template>
  <a-layout class="h-[100vh]">
    <a-card :bordered="false" :body-style="{ padding: 0 }">
      <div class="flex justify-between items-center px-4">
        <div>我的游戏</div>
        <div class="flex-1 justify-end flex">
          <a-menu :mode="'horizontal'">
            <a-menu-item v-for="item in routers" :key="item.key">
              <RouterLink :to="item.key">{{ item.title }}</RouterLink>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </a-card>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import router from '@/router';
const routers = [
  {
    title: '主界面',
    key: '/',
  },
  {
    title: '编辑',
    key: '/edit',
  },
];
</script>

<style lang="scss" scoped>
.ant-layout-header {
  color: white;
}
</style>
