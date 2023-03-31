<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
  <main class="min-h-screen bg-gray-50">
    <div class="grid grid-cols-12">
      <div class="col-span-6">
        <p
          class="font-extrabold text-transparent p-4 text-7xl font-['Poppins'] bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-500 mt-28 ml-9"
        >
          You are <br />
          logged out.
        </p>
        <p class="ml-14 mt-9 font-['Poppins'] font-semibold text-lg">
          You are logged out. Too see your account please log in. <br />
          Don't have account? Sign in to create one.
        </p>

        <RouterLink :to="{ name: 'login' }">
          <button
            class="inline-flex border-4 border-blue-400 hover:border-blue-500 rounded-full flex items-center justify-center w-40 py-3 px-3 ml-14 mt-20 bg-blue-400 hover:bg-blue-500 duration-300"
          >
            <p class="font-['Poppins'] text-lg font-medium text-white tracking-widest">SIGN IN</p>
          </button>
        </RouterLink>

        <RouterLink :to="{ name: 'register' }">
          <button
            class="inline-flex border-4 border-blue-400 rounded-full flex items-center justify-center w-40 py-3 px-3 ml-10 mt-20 bg-transparent"
          >
            <p class="font-['Poppins'] text-lg font-medium text-gray-900 tracking-widest">
              SIGN UP
            </p>
          </button>
        </RouterLink>
      </div>

      <div class="absolute ml-[34%]">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_0fwl68.json"
          mode="bounce"
          background=""
          speed="1.5"
          style="width: 600px; height: 600px"
          loop
          autoplay
        ></lottie-player>
      </div>

      <div class="col-span-6">
        <div
          class="bg-gradient-to-r from-indigo-300 via-blue-400 to-indigo-500 min-h-screen rounded-tl-[12%] rounded-bl-[12%]"
        ></div>
      </div>
    </div>
  </main>
</template>
