import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'

/* Main Layout */
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard,
          meta: { title: 'Dashboard' }
        },
        {
          path: '/expense-tracker',
          name: 'expense-tracker',
          component: () => import('@/pages/ExpenseTracker.vue'),
          meta: { title: 'Expense Tracker' }
        },
      ]
    },
    {
      path: '/:catchAll(.*)*',
      name: 'page-not-found',
      component: () => import('@/pages/Errors/NotFound.vue'),
      meta: { title: 'Page Not Found' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Jedero`
  next()

})

export default router
