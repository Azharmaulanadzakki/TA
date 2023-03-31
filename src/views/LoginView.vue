<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthRepository } from '@/composables'

const repository = useAuthRepository()
const route = useRoute()
const router = useRouter()

const credentials = reactive({
  email: '',
  password: '',
  device_name: 'browser'
})

const isLoggingIn = ref(false)
const onSubmit = async () => {
  isLoggingIn.value = true

  try {
    const { data } = await repository.login(credentials)
    if (data) {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('user', JSON.stringify(data.user))
      router.replace({ name: 'home' })
    }
  } catch (e) {
    console.error(e)
  }

  isLoggingIn.value = false
}
</script>
<template>
  <div
    class="min-w-screen min-h-screen bg-gradient-to-r from-indigo-100 via-blue-200 to-indigo-300 flex items-center justify-center px-5 py-5"
  >
    <div
      class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
      style="max-width: 1000px"
    >
      <div class="md:flex w-full">
        <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10 drop-shadow-2x1">
          <lottie-player
            class="mx-auto scale-150"
            src="https://lottie.host/ca70ed76-1cfa-45b6-9533-58d02abba327/S82YQWyF2i.json"
            background="transparent"
            speed="1.5"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10 drop-shadow-2x1">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900 font-['Poppins']">Login First</h1>
          </div>

          <form method="post" :action="route.path" @submit.prevent="onSubmit">
            <div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <label for="email" class="text-xs font-semibold px-1">Email</label>
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      v-model="credentials.email"
                      type="email"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-12">
                  <label for="password" class="text-xs font-semibold px-1">Password</label>
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      v-model="credentials.password"
                      type="password"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="****"
                    />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-52 px-3 mb-5">
                  <button
                    class="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 duration-300 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    LOGIN
                  </button>
                </div>
              </div>
              <a href="register" class="text-gray-900"> Dont have account ? Register </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
