<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthRepository } from '@/composables';
import { onMounted } from 'vue';

  const repository = useAuthRepository();
  const route = useRoute();
  const router = useRouter();

  const loading = ref(false);
  const isloading = ()=> {
      loading.value = true
    setTimeout (function(){
        loading.value = false
    }, 2300)                                                                     
  }


  onMounted(() => isloading());

</script>

<template>

    <div v-if="loading" class="min-h-screen flex items-center justify-center mx-auto">
        <lottie-player src="https://lottie.host/73b49e04-3f43-42c2-85f9-436a3c5b1b54/HSnx47BP0W.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
        <p class="absolute mt-72  font-bold font-['Poppins'] text-5xl text-center hidden md:inline">Please Wait...</p>
    </div>

    <div v-else>

        <!-- main 1 -->
        <div class="min-h-screen bg-gray-50 grid grid-cols-12">  
            <div class="col-span-6 bg-[#8a3ffc]">
                <h1 class="font-['Poppins'] font-semibold text-4xl mt-8 ml-5 text-white">
                    Dry Cleaning
                </h1>
                <lottie-player class="mx-auto mt-24 scale-[200%]" src="https://lottie.host/3c6b3003-4942-4a3e-b020-2fa14e3e0deb/ZZ9qjvbrHK.json" background="transparent" speed="0.5" style="width: 500px; height: 300px;" loop autoplay></lottie-player>    
            </div>

            <div class="col-span-6 bg-gray-200">
                
            </div>
        </div>


        <!-- for smartphone -->
        
    

   
    </div>
</template>

