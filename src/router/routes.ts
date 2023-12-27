import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/registration',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegistrationPage.vue') }],
  },
  {
    path: '/insight',
    component: () => import('layouts/MainLayaoutHeader.vue'),
    children: [{ path: '', component: () => import('pages/InsightPage.vue') }],
  },
  {
    path: '/analysis',
    component: () => import('layouts/MainLayaoutHeader.vue'),
    children: [{ path: '', component: () => import('pages/AnalysisPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
