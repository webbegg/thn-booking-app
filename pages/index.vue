<template>
  <div class="text-gray font-base">
    <Header />
    <main>
      <BookingForm />
      <div class="mt-12 flex flex-col">
        <div class="flex container mx-auto mb-10 justify-center xl:mb-0">
          <div class="flex flex-col items-center xl:items-start xl:w-2/3">
            <h1 class="title mb-2">Rooms & Rates</h1>
            <p class="text-xl mb-6">Plan your perfect stay at our hotel</p>
            <img src="~/assets/booking-steps.png" alt="Booking process steps" />
          </div>

          <div class="hidden xl:flex justify-center w-1/3">
            <img src="~/assets/resume-bg.png" alt="Coco's drink" />
          </div>
        </div>

        <div
          class="container mx-auto flex items-start flex-col xl:flex-row px-10 xl:px-0"
        >
          <div class="xl:mr-10 w-full xl:w-2/3">
            <RoomsList :rooms="rooms" />
          </div>
          <div
            class="border border-gray-light p-10 xl:mx-0 w-full xl:w-1/3 mt-10 xl:mt-0"
          >
            <BookingSummary />
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <div class="fixed inset-0 z-50" v-if="infoMessage">
      <div class="bg-black absolute opacity-75 inset-0 z-10"></div>
      <div class="absolute inset-0 z-20 flex justify-center items-center">
        <div
          class="bg-white shadow-lg px-20 py-10 font-semibold flex flex-col items-center"
        >
          <img
            src="~/assets/info.svg"
            alt="Info icon"
            class="w-10 h-10 opacity-50"
          />
          <p class="py-10 title">{{ infoMessage }}</p>
          <Button @click="closeInfoModal" class="w-full">Accept</Button>
        </div>
      </div>
    </div>

    <!-- Debug screen size -->
    <!-- <div class="bg-black text-white fixed right-0 bottom-0 text-lg px-4">
      <span class="md:hidden">SM - SMALL</span>
      <span class="hidden md:block lg:hidden">MD - MEDIUM</span>
      <span class="hidden lg:block xl:hidden">LG - LARGE</span>
      <span class="hidden xl:block">XL - EXTRA LG</span>
    </div> -->
  </div>
</template>

<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BookingForm from '~/components/BookingForm'
import RoomsList from '~/components/RoomsList'
import BookingSummary from '~/components/BookingSummary'

export default defineComponent({
  head() {
    return {
      title: 'Booking - Los Cocos Bungalows',
    }
  },
  setup() {
    const { store, route } = useContext()

    const { promo_code } = route.value.query
    store.dispatch('booking/setPromoCode', promo_code)

    const rooms = computed(() => store.state.booking.rooms || [])
    const booking = computed(() => store.state.booking.filters || {})

    const infoMessage = computed(() => store.state.booking.infoMessage)

    const closeInfoModal = () => {
      store.dispatch('booking/setInfoMessage', '')
    }

    return { rooms, booking, infoMessage, closeInfoModal }
  },
})
</script>
