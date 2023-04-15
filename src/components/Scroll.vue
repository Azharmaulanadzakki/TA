<template>
  <a
    @click="scrollToTop"
    class="fixed bg-blue-600 top-[87%] py-3 px-4 mx-[82%] md:mx-[90%] lg:px-3 lg:py-2 lg:mx-[95%] lg:top-[90%] rounded-full animate-bounce duration-300 cursor-pointer text-white"
    id="scrollToTop"
  >
    <i class="bi bi-chevron-double-up" />
  </a>
</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 4)

      function frame() {
        if (0 > currentScroll) clearInterval(int)
        else {
          currentScroll = currentScroll - 12
          document.documentElement.scrollTop = currentScroll
        }
      }
    }
  }
}
</script>
