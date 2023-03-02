<script setup>

import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthRepository } from "@/composables";


const repository = useAuthRepository();
const route = useRoute();
const router = useRouter();

const credentials = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  device_name: "browser",
});

const isLoggingIn = ref(false); 
const onSubmit = () => {
  isLoggingIn.value = true;

  try {
    repository.register(credentials);
    router.replace({name: 'login'})
  } catch (e) {
    console.error(e);
  }

  isLoggingIn.value = false;
};

</script>

<template>
  <main class="grid grid-cols-12 gap-4 min-h-screen">
      <section class="col-span-6 bg-blue-300 h-full shadow-xl">
          <form method="post" :action="route.path" class="p-40" @submit.prevent="onSubmit">
          <div class="mb-4">
              <label for="email" class="block mb-2">Email</label>
              <input v-model="credentials.email" type="email" required placeholder="someone@email.com" class="border p-2 w-full bg-gray-100 outline-none focus:ring-4 focus:ring-blue-300 rounded" />
          </div>
          <div class="mb-4">
              <label for="password" class="block mb-2">Password</label>
              <input v-model="credentials.password" type="password" required placeholder="password" class="border p-2 w-full bg-gray-100 outline-none focus:ring-4 focus:ring-blue-300 rounded" />
          </div>
          <div class="mb-4">
              <label for="password" class="block mb-2">Password</label>
              <input 
              v-model="credentials.password_confirmation" 
              type="password" 
              required placeholder="password confirmation" 
              class="border p-2 w-full bg-gray-100 outline-none focus:ring-4 focus:ring-blue-300 rounded" />
          </div>
          <button type="submit" 
          class="text-sm font-medium bg-blue-600 text-white py-2 px-3 block rounded-lg">Register
      </button>
          </form>
          <slot />
      </section>
  </main>
</template>