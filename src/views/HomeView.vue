<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthRepository } from '@/composables'
import { onMounted } from 'vue';

  

const repository = useAuthRepository()
const route = useRoute()
const router = useRouter()

const userdata = JSON.parse(localStorage.getItem('user'))

const isLoggingIn = ref(false)
const logout = () => {
  isLoggingIn.value = true
  try {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    repository.logout
    router.replace({ name: 'logout' })
  } catch (e) {
    console.error(e)
  }
  isLoggingIn.value = false
}

const dropdown = ref(false)

const dropdown_show = () => {
  dropdown.value = true
}

const dropdown_hide = () => {
  dropdown.value = false
}

const loading = ref(false)
const isloading = () => {
  loading.value = true
  setTimeout(function () {
    loading.value = false
  }, 2000)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});

onMounted(() => {
  isloading()
})

</script>
<template>

  <div v-if="loading" class="min-h-screen flex items-center justify-center mx-auto">
    <div class="flex items-center justify-center">
      <div
        class="overflow-hidden inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_0.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  </div>

  <main v-else class="h-screen bg-[#E8E8E8]">
    <!-- Navbar -->

    <nav class="box-border bg-[#E8E8E8] w-full h-[5rem]">
      <div class="flex items-center justify-between z-20 text-black py-5 container mx-auto">
        <a href="#" class="font-['Poppins'] font-semibold tracking-wide text-2xl flex-shrink-0">
          Futsalverse™
        </a>
        <ul class="flex items-center justify-center space-x-14 w-full mx-auto">
          <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
            <RouterLink to="/">Address</RouterLink>
          </li>
          <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
            <RouterLink to="services">Services</RouterLink>
          </li>
          <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
            <a href="#a">Contact</a>
          </li>
          <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
              <a href="#a">How to work</a>
            </li>
        </ul>

        <div v-if="userdata">
          <button
            v-if="dropdown"
            @click="dropdown_hide"
            class="p-3 px-10 w-40 border-2 border-black rounded-xl flex items-center justify-center mr-2 bg-[#f55736]"
          >
            <div class="font-['Poppins'] font-semibold text-sm tracking-wide text-white">
              {{ userdata.name }}<i class="fas fa-chevron-up mx-1"></i>
            </div>
          </button>

          <div v-if="dropdown" class="absolute z-50 right-9 mt-2">
            <div class="box-border w-40 bg-white rounded-lg">
              <div class="flex-row">
                <button
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  class="border-b border-gray-900 w-full text-left hover:bg-gray-300 rounded-tr-lg rounded-tl-lg"
                >
                  <p class="font-['Poppins'] font-medium p-2">
                    <span><i class="fa-regular fa-user text-gray-900 mx-2"></i></span> See profile
                  </p>
                </button>
                <button
                  @click="logout"
                  class="w-full text-left hover:bg-gray-300 rounded-br-lg rounded-bl-lg"
                >
                  <p class="font-['Poppins'] font-medium p-2">
                    <span><i class="fa-regular fa-right-from-bracket text-gray-900 mx-2"></i></span>
                    Logout
                  </p>
                </button>
              </div>
            </div>
          </div>

          <button
            v-else
            @click="dropdown_show"
            class="p-3 px-10 w-40 border-2 border-black rounded-xl flex items-center justify-center mr-2 hover:bg-[#f55736] duration-300 hover:text-white duration-300"
          >
            <div class="font-['Poppins'] font-semibold text-sm tracking-wide w-full">
              {{ userdata.name }} <i class="fas fa-chevron-down "></i>
            </div>
          </button>
        </div>

        <div v-else>
          <div class="flex inline-flex">  
            <button
              class="p-3 px-1 border-2 border-black rounded-xl flex items-center justify-center mr-2 hover:bg-[#f55736] duration-300"
            >
              <RouterLink to="login" class="font-['Poppins'] font-semibold text-sm tracking-wide w-20"
                >Sign in</RouterLink
              >
            </button>
  
            <button
              class="p-3 px-2 border-2 border-black bg-black rounded-xl flex items-center justify-center hover:bg-gray-500 duration-300"
            >
              <RouterLink
                to="register"
                class="font-['Poppins'] font-semibold text-sm text-white tracking-wide w-28"
                >Get Started</RouterLink
              >
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- end of navbar -->

    <!-- start content -->
    <div class="flex items-center justify-center mx-auto">
      <div class="box-border bg-[#F55736] w-[75rem] h-72 mt-5 rounded-2xl">
        <p
          class="font-['Poppins'] font-extrabold text-gray-50 text-7xl w-96 ml-16 mt-28 tracking-wide relative z-50"
        >
          Futsalverse is already
        </p>
        <p
          class="font-['Poppins'] font-black text-black text-7xl w-96 ml-16 mt-16 tracking-wide relative z-50"
        >
          Vinci per noi.
        </p>

        <div class="relative justify-center items-center">
          <img
            src="../assets/image/football player.png"
            class="absolute left-96 -bottom-12 z-10"
            alt=""
          />
        </div>

        <div class="relative justify-center items-center">
          <img
            src="../assets/image/image 1.png"
            class="absolute left-[35.1rem] -bottom-8 w-[40rem] h-[27rem] rounded-tl-xl rounded-bl-[7rem] rounded-br-2xl"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- end content -->
  </main>

  <main class="min-h-screen bg-[#171513] grid grid-cols-12">
    <div class="col-span-7 w-full h-full">
      <h1 class="text-white text-6xl mt-11 ml-5 font-semibold tracking-wide w-96 leading-tight">
        Futsalverse™ our facilities.
      </h1>

      <ol class="list-disc mt-10 ml-11 leading-relaxed">
        <li class="text-white font-['Poppins'] mt-3 text-2xl break-word">
          International standard court from FIFA 40M x 20M.
        </li>
        <li class="text-white font-['Poppins'] mt-3 text-2xl break-word">
          We have a good cafe for rest after playing futsal and <br />
          very comfortable.
        </li>
        <li class="text-white font-['Poppins'] mt-3 text-2xl break-word">
          We have a clean locker room and can be used to <br />
          store your luggage.
        </li>
        <li class="text-white font-['Poppins'] mt-3 text-2xl break-word">Clean toilet.</li>
      </ol>
      <div>
        <img src="../assets/image/Vector.png" class="h-44 w-full mt-1" />
      </div>
    </div>

    <!-- colspan5 -->
    <div class="col-span-5 h-full w-full flex items-center justify-center mt-0.5">
      <div id="default-carousel" class="relative h-full w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden md:h-[40rem]">
          <!-- Item 1 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="../assets/image/court1.jpeg"
              class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="../assets/image/cafe.jpeg"
              class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="../assets/image/locker.jpeg"
              class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 4 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src="../assets/image/toilet.jpeg"
              class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </main>

  <main id="a" class=" min-h-screen bg-[#E8E8E8]">
    <div class="flex items-center justify-center">
      <h1 class="text-center text-6xl font-extrabold font-['Helvetica'] italic mt-11 w-full">
        How To Work
      </h1>
    </div>
    <p class="text-center mt-6 font-semibold font-['Helvetica'] text-4xl">FUTSALVERSE™</p>
    <div class="flex items-center justify-center">
      <div class="inline-flex mt-6">
        <div class="">
          <img src="../assets/image/Tanggal.png" alt="" class="h-64" />
          <p class="text-left mx-auto font-['Poppins'] relative bottom-4 text-3xl w-52 font-medium">
            Choose date and time.
          </p>
        </div>
        <div class="">
          <img src="../assets/image/next.png" alt="" class="h-20 mt-24 mx-16" />
        </div>
        <div class="">
          <img src="../assets/image/Pembayaran.png" alt="" class="h-64" />
          <p class="text-left mx-auto font-['Poppins'] relative bottom-4 text-3xl w-72 font-medium">
            Choose payment method.
          </p>
        </div>
        <div class="">
          <img src="../assets/image/next.png" alt="" class="h-20 mt-24 mx-16" />
        </div>
        <div class="">
          <img src="../assets/image/Player.png" alt="" class="h-64" />
          <p class="text-left mx-auto font-['Poppins'] relative bottom-4 text-3xl w-52 font-medium">
            Let's play and have fun.
          </p>
        </div>
      </div>
    </div>
  </main>

  <!-- Foooter -->
  <footer class="bg-[#F55736]">
    <div class="max-w-screen-xl px-4 py-7 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <a href="#" class="text-base leading-6 text-gray-100 hover:text-gray-900"> Address </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="text-base leading-6 text-gray-100 hover:text-gray-900"> Services </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="text-base leading-6 text-gray-100 hover:text-gray-900"> Contact </a>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a href="#" class="text-gray-100 hover:text-gray-900">
          <span class="sr-only">Facebook</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="#" class="text-gray-100 hover:text-gray-900">
          <span class="sr-only">Instagram</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="#" class="text-gray-100 hover:text-gray-900">
          <span class="sr-only">Twitter</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            ></path>
          </svg>
        </a>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-100">
        © 2023 Futsalverse™ Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>
