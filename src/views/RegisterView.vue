<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthRepository } from '@/composables'

const repository = useAuthRepository()
const route = useRoute()
const router = useRouter()

const credentials = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  device_name: 'browser'
})

const isLoggingIn = ref(false)
const onSubmit = () => {
  isLoggingIn.value = true
  try {
    repository.register(credentials)
    router.replace({ name: 'login' })
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
            class="scale-150 my-24 mx-12"
            src="https://lottie.host/bd1ab5e7-5ffa-447c-bc28-d78cd1f19dad/RlpquiVxJy.json"
            mode="bounce"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10 drop-shadow-2x1">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900 font-['Poppins']">Register First</h1>
          </div>
          <form method="post" :action="route.path" @submit.prevent="onSubmit">
            <div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-2">
                  <label for="name" class="text-xs font-semibold px-1">Name</label>
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i class="mdi mdi-account-circle text-gray-400 text-lg"></i>
                    </div>
                    <input
                      v-model="credentials.name"
                      type="text"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="your name"
                    />
                  </div>
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-2">
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
                      placeholder="your email"
                    />
                  </div>
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-2">
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
                <div class="w-full px-3 mb-12">
                  <label for="password" class="text-xs font-semibold px-1"
                    >Password confirmation</label
                  >
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      v-model="credentials.password_confirmation"
                      type="password"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="****"
                    />
                  </div>
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-52 px-3 mb-2">
                  <button
                    class="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 duration-300 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Register
                  </button>
                </div>
              </div>
              <a href="/login" class="text-gray-900"> Already have account ? Login </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
