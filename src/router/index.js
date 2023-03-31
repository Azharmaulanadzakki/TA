import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: { requireGuest: true },
    },
    
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: { requireGuest: true },
    },
    
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
      meta: { requireAuth: true },
    },
    
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/Logout.vue"),
      meta: { requireGuest: true },
    },

    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
    },
    
   
  ],
});

router.beforeEach((to, from) =>{
  const authenticated = localStorage.getItem("access_token");

  if (to.meta.requireGuest && authenticated) {
    return {
      name: "services",
    };
  } else if (to.meta.requireAuth && !authenticated) {
    return{
      name: "login",
    };
  }
})


export default router
