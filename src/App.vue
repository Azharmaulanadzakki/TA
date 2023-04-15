<script setup>
import { RouterView, useRouter } from 'vue-router'

import Scroll from './components/Scroll.vue'

const router = useRouter()
</script>

<template>
  <div class="box-border antialiased">
    <!-- <Scroll
      v-if="
        router.currentRoute.value.name !== 'login' &&
        router.currentRoute.value.name !== 'register' &&
        router.currentRoute.value.name !== 'home' &&
        router.currentRoute.value.name !== 'notfound' &&
        router.currentRoute.value.name !== 'logout'
      "
    /> -->

    <RouterView />
  </div>
</template>
``
<!-- <a href="/" class="absolute inline-block text-lg group mt-3 ml-3">
  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
  <span class="relative">Back</span>
  </span>
  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>       -->
