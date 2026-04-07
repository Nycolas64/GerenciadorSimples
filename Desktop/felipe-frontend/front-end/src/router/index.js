import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TasksView from '../views/Task.vue'
import NovaTaskView from '../views/NovaTask.vue'
import EditarView from '../views/Editar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/nova',
      name: 'nova',
      component: NovaTaskView
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarView,
      props: true
    }
  ]
})

export default router