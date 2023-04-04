<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthRepository } from '@/composables'
import { onMounted } from 'vue'

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
  }, 1000)

  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthh = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const d = new Date()
  let day = weekday[d.getDay()]
  let date = d.getDate()
  let month = monthh[d.getMonth()]
  let year = d.getFullYear()
  document.getElementById('day').innerHTML = day
  document.getElementById('date').innerHTML = date + ' ' + month + ' ' + year
}

onMounted(() => isloading())
</script>

<template>
  <div v-if="loading" class="min-h-screen flex items-center justify-center mx-auto">
    <div class="flex items-center justify-center">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_0.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  </div>

  <div v-else>
    <main class="h-screen bg-[#E8E8E8]">
      <nav class="box-border bg-[#E8E8E8] w-full h-[5rem]">
        <div class="flex items-center justify-between z-20 text-black py-5 container mx-auto">
          <a href="/" class="font-['Poppins'] font-semibold tracking-wide text-2xl flex-shrink-0">
            Futsalverse™
          </a>
          <ul class="flex items-center justify-center space-x-14 w-80 mx-auto">
            <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
              <RouterLink to="/">Address</RouterLink>
            </li>
            <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
              <RouterLink to="services">Services</RouterLink>
            </li>
            <li class="mx-2 text-black font-semibold tracking-wide font-['Poppins']">
              <a href="https://wa.me/qr/YGI4YOYVBZ46E1">Contact</a>
            </li>
          </ul>

          <div v-if="userdata">
            <button
              v-if="dropdown"
              @click="dropdown_hide"
              class="p-3 px-6 border-2 border-black rounded-xl flex items-center justify-center mr-2 bg-[#f55736]"
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
                      <span
                        ><i class="fa-regular fa-right-from-bracket text-gray-900 mx-2"></i
                      ></span>
                      Logout
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <button
              v-else
              @click="dropdown_show"
              class="p-3 px-6 border-2 border-black rounded-xl flex items-center justify-center mr-2 hover:bg-[#f55736] duration-300 hover:text-white duration-300"
            >
              <div class="font-['Poppins'] font-semibold text-sm tracking-wide">
                {{ userdata.name }} <i class="fas fa-chevron-down"></i>
              </div>
            </button>
          </div>

          <div v-else>
            <button
              class="p-3 px-6 border-2 border-black rounded-xl flex items-center justify-center mr-2 hover:bg-[#f55736] duration-300"
            >
              <RouterLink to="login" class="font-['Poppins'] font-semibold text-sm tracking-wide"
                >Sign in</RouterLink
              >
            </button>

            <button
              class="p-3 px-4 border-2 border-black bg-black rounded-xl flex items-center justify-center hover:bg-gray-500 duration-300"
            >
              <RouterLink
                to="register"
                class="font-['Poppins'] font-semibold text-sm text-white tracking-wide"
                >Get Started</RouterLink
              >
            </button>
          </div>
        </div>
      </nav>

      <!-- main 1 -->

      <div class="grid grid-cols-12">
        <div class="col-span-2 bg-[#F55736] w-full h-96 rounded-tr-xl rounded-br-xl mt-4">
          <div class="mt-4 ml-3">
            <p id="day" class="text-2xl ml-2 font-medium font-['Poppins']"></p>
            <p id="date" class="text-2xl ml-2 font-medium font-['Poppins']"></p>
          </div>

          <button
            class="px-6 py-2 ring-2 ring-black bg-stone-100 hover:bg-gray-300 duration-300 focus:bg-gray-200 duration-300 rounded-xl mt-8 ml-5 focus:ring-4 duration-300 focus:ring-black duration-300"
          >
            <p class="text-sm font-semibold text-gray-900 tracking-wide">Book now</p>
          </button>

          <button
            class="px-6 py-2 ring-2 ring-gray-200 bg-gray-800 hover:bg-gray-900 duration-300 focus:bg-gray-900 duration-300 rounded-xl mt-8 ml-5 focus:ring-4 duration-300 focus:ring-gray-200 duration-300"
          >
            <p class="text-sm font-semibold text-gray-50 focus:text-gray-900 tracking-wide">Payment history</p>
          </button>
        </div>

        <div class="col-span-10 mt-4">
          <div class="flex items-center justify-center mx-auto">
            <div class="overflow-y-scroll rounded-xl">
              <div class="box-border w-[65rem] h-[30rem] bg-white rounded-xl">
                <div class="rounded-xl">
                  <table class="w-full h-full text-sm text-left text-gray-500 rounded-xl">
                    <thead
                      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-xl"
                    >
                      <tr>
                        <th class="px-6 py-3">Time</th>
                        <th class="px-6 py-3">Price</th>
                        <th class="px-6 py-3">Status</th>
                        <!-- <th class="px-6 py-3">Action</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">07.00 - 09.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-emerald-500 hover:bg-emerald-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-check" /> Ready
                          </button>
                        </td>
                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">09.00 - 11.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-red-500 hover:bg-red-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-xmark" /> Booked
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">12.00 - 13.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-red-500 hover:bg-red-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-xmark" /> Booked
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">13.00 - 15.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-emerald-500 hover:bg-emerald-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-check" /> Ready
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">15.00 - 17.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-red-500 hover:bg-red-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-xmark" /> Booked
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">17.00 - 19.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-emerald-500 hover:bg-emerald-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-check" /> Ready
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">19.00 - 21.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-emerald-500 hover:bg-emerald-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-check" /> Ready
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">21.00 - 23.00</td>
                        <td class="px-6 py-4">Rp. 200.000,-</td>
                        <td class="px-6 py-4">
                          <button
                            class="bg-emerald-500 hover:bg-emerald-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                          >
                            <i class="fa-regular fa-check" /> Ready
                          </button>
                        </td>

                        <!-- <RouterLink to="/">
                          <td class="px-6 py-4">
                            <button
                              class="bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl py-1 px-3 text-white font-medium"
                            >
                              Booking
                            </button>
                          </td>
                        </RouterLink> -->
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- for smartphone -->
</template>
