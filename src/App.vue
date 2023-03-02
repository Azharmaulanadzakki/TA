<script setup>
import { RouterView, useRouter } from 'vue-router'

import Navbar from './components/Navbar.vue';
import Scroll from './components/Scroll.vue';
import Footer from './components/Footer.vue';

const router = useRouter()
</script>

<template>

  <Navbar v-if="router.currentRoute.value.name !== 'login' && 
                router.currentRoute.value.name !== 'register' " />
  
  <Scroll v-if="router.currentRoute.value.name !== 'login' &&
                router.currentRoute.value.name !== 'register' "/>
  
  <RouterView />
  
  <Footer v-if="router.currentRoute.value.name !== 'login' &&
                router.currentRoute.value.name !== 'register' "/>
</template>
``
  


