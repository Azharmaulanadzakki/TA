<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthRepository } from "@/composables";


const repository = useAuthRepository();
const route = useRoute();
const router = useRouter();

const credentials = reactive({
  email: "",
  password: "",
  device_name: "browser",
});

const isLoggingIn = ref(false); 
const onSubmit = async () => {
  isLoggingIn.value = true;

  try {
    const { data } = await repository.login(credentials);
    if (data) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.replace({ name: "export" });
    }
  } catch (e) {
    console.error(e);
  }

  isLoggingIn.value = false;
};


</script>
<template>
  <main class="grid md:grid-cols-12 gap-4 min-h-screen">
      <section class="md:col-span-6 col-span-0 bg-blue-300 h-full shadow-xl">
          <form method="post" :action="route.path" class="p-40" @submit.prevent="onSubmit">
          <div class="mb-4">
              <label for="email" class="block mb-2">Email</label>
              <input v-model="credentials.email" type="email" required placeholder="someone@email.com" class="border p-2 w-full bg-gray-100 outline-none focus:ring-4 focus:ring-blue-300 rounded" />
          </div>
          <div class="mb-4">
              <label for="password" class="block mb-2">Password</label>
              <input v-model="credentials.password" type="password" required placeholder="password" class="border p-2 w-full bg-gray-100 outline-none focus:ring-4 focus:ring-blue-300 rounded" />
          </div>
          <button type="submit" 
          class="text-sm font-medium bg-blue-600 text-white py-2 px-3 block rounded-lg">Login
      </button>
          </form>
          <slot />
      </section>
  </main>
</template>  