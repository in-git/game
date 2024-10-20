import { createRouter, createWebHashHistory } from 'vue-router';
/* 页面中没有挂载路由 */
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/modules/main/Main.vue'),
    },
    {
      path: '/edit',
      name: 'edit',
      meta: { title: '' },
      component: () => import('@/views/modules/edit/index.vue'),
      children: [],
    },
  ],
});
