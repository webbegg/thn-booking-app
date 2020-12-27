<template>
  <div>
    <header id="header" :class="headerFixedClass">
      <nav class="container mx-auto text-lg text-gray-700">
        <a href="#" class="hidden md:flex items-center hover:text-brand">
          Home
        </a>
        <a href="#" class="hidden md:flex items-center hover:text-brand">
          Rooms
        </a>
        <a href="#" class="hidden md:flex items-center hover:text-brand">
          Restaurant
        </a>

        <a href="#" class="flex items-center justify-start lg:justify-center">
          <img class="logo" src="~/assets/logo.png" alt="Logo los cocos" />
        </a>

        <a
          href="#"
          class="hidden md:flex items-center justify-end hover:text-brand"
        >
          Weedings
        </a>
        <a
          href="#"
          class="hidden md:flex items-center justify-end hover:text-brand"
        >
          Membership
        </a>
        <a
          href="#"
          class="hidden md:flex items-center justify-end hover:text-brand"
        >
          Contact
        </a>

        <!-- mobile links -->
        <div class="ml-auto flex md:hidden">
          <Button bg="gray-soft" @click="toogleBookingModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-brand"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </Button>
          <Button class="ml-4" @click="toogleMobileMenu">
            <svg
              v-if="!showMobileMenu"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </nav>
    </header>

    <!-- mobile menu -->
    <div class="fixed inset-0 mobile-menu z-50 mt-20" v-if="showMobileMenu">
      <div class="absolute inset-0 bg-black opacity-75"></div>
      <div
        class="absolute inset-0 flex justify-center items-center mobile-menu__container"
        @click="toogleMobileMenu"
      >
        <nav
          class="bg-white shadow-lg p-6 flex flex-col absolute right-0 top-0 bottom-0 w-2/3"
          @click.stop="() => null"
        >
          <a
            href="#"
            class="p-4 text-2xl font-semibold bg-gray-soft mb-4 items-center hover:text-white hover:bg-brand"
            @click="toogleMobileMenu"
          >
            Home
          </a>
          <a
            href="#"
            class="p-4 text-2xl font-semibold bg-gray-soft mb-4 items-center hover:text-white hover:bg-brand"
            @click="toogleMobileMenu"
          >
            Rooms
          </a>
          <a
            href="#"
            class="p-4 text-2xl font-semibold bg-gray-soft mb-4 items-center hover:text-white hover:bg-brand"
            @click="toogleMobileMenu"
          >
            Restaurant
          </a>
          <a
            href="#"
            class="p-4 text-2xl font-semibold bg-gray-soft mb-4 items-center hover:text-white hover:bg-brand"
            @click="toogleMobileMenu"
          >
            Weedings
          </a>
          <a
            href="#"
            class="p-4 text-2xl font-semibold bg-gray-soft mb-4 items-center hover:text-white hover:bg-brand"
            @click="toogleMobileMenu"
          >
            Membership
          </a>
          <a
            href="#"
            class="mt-auto p-4 text-2xl font-semibold bg-gray-soft mb-4 items-center hover:text-white hover:bg-brand"
            @click="toogleMobileMenu"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useContext,
  ref,
  computed,
  onMounted,
  onUnmounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const state = store.state.booking

    const active = ref(false)
    const headerFixedClass = computed(() => {
      if (active.value == false) {
        return 'p-3 bg-white shadow-lg'
      } else {
        return 'p-3 bg-white shadow-lg fixed'
      }
    })

    const toogleBookingModal = () => {
      store.commit('booking/setShowBookingModal', !state.showBookingModal)
    }

    const showMobileMenu = computed(() => state.showMobileMenu)
    const toogleMobileMenu = () => {
      store.commit('booking/setShowMobileMenu', !state.showMobileMenu)
    }

    onMounted(() => {
      let navBar = document.getElementById('header')
      console.log(navBar)
      window.document.onscroll = () => {
        if (window.scrollY > navBar.offsetTop + 80) {
          active.value = true
        } else {
          active.value = false
        }
      }
    })

    onUnmounted(() => {
      window.document.onscroll = null
    })

    return {
      headerFixedClass,
      toogleBookingModal,
      showMobileMenu,
      toogleMobileMenu,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    transition: 150ms;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.24);
    animation: slideDown 0.62s both;
    animation-timing-function: ease;
  }

  nav {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(7, 1fr);

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.mobile-menu {
  &__container {
    animation: slideLeft 0.62s both;
    animation-timing-function: ease;
  }
}
</style>
