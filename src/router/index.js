import { createRouter, createWebHistory } from 'vue-router';
import Addprojects from '@/views/Addprojects.vue';
import projects from '@/views/projects.vue';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/add-projects',
      name: 'Addprojects',
      component: Addprojects
    }
  ]
});

export default router;
