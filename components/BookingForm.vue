<template>
  <div class="bookign-form">
    <div class="py-12">
      <div class="py-8 relative">
        <div class="bg-brand opacity-25 absolute inset-0"></div>

        <!-- mobile -->
        <div
          class="container relative text-lg mx-auto bg-white shadow-lg p-4 flex lg:hidden"
        >
          <div class="flex flex-1 justify-around">
            <div>
              <div class="font-bold">Reservation date</div>
              <div class="flex flex-col md:flex-row">
                <div class="flex">
                  <span class="flex-1"> From </span>
                  <span class="font-semibold px-2">{{ checkIn }}</span>
                </div>
                <div class="flex">
                  <span class="flex-1">to</span>
                  <span class="font-semibold px-2">{{ checkOut }}</span>
                </div>
              </div>
            </div>

            <div class="ml-2 px-6">
              <div class="font-bold">People</div>
              <div class="flex flex-col md:flex-row">
                <div class="flex md:mr-6">
                  <span class="flex-1">Adults: </span>
                  <span class="font-semibold">{{ pax }}</span>
                </div>
                <div v-if="childs > 0" class="flex">
                  <span class="flex-1">Children: </span>
                  <span class="font-semibold">{{ childs }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="ml-auto flex items-center justify-end">
            <Button class="h-full px-16" @click="toogleBookingModal">
              Modify
            </Button>
          </div>

          <div class="fixed inset-0 booking-modal" v-if="showBookingModal">
            <div class="fixed inset-0 bg-black opacity-75"></div>
            <div
              class="fixed inset-0 flex justify-center items-center booking-modal__container"
              @click="toogleBookingModal"
            >
              <div
                class="bg-gray-soft shadow-lg p-6 flex flex-col"
                @click.stop="() => null"
              >
                <DatesInput
                  :checkIn="checkIn"
                  :checkOut="checkOut"
                  @input="onDateSelected"
                />
                <div class="grid grid-cols-2 gap-4 my-8">
                  <PaxSelector
                    prefix="Adults"
                    :icon="require('~/assets/arrow-down.svg')"
                    v-model="pax"
                  />
                  <PaxSelector
                    prefix="Children"
                    :icon="require('~/assets/arrow-down.svg')"
                    v-model="childs"
                  />
                </div>
                <Button @click="setFilters">Modify</Button>
              </div>
            </div>
          </div>
        </div>

        <!-- desktop -->
        <div class="container mx-auto relative justify-center z-0 booking-form">
          <DatesInput
            :checkIn="checkIn"
            :checkOut="checkOut"
            @input="onDateSelected"
          />
          <PaxSelector
            prefix="Adults"
            :icon="require('~/assets/arrow-down.svg')"
            v-model="pax"
          />
          <PaxSelector
            prefix="Children"
            :icon="require('~/assets/arrow-down.svg')"
            v-model="childs"
          />
          <Button @click="setFilters">Modify</Button>
        </div>
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
} from '@nuxtjs/composition-api'

import Input from '~/components/ui/Input'
import Button from '~/components/ui/Button'
import PaxSelector from '~/components/ui/PaxSelector'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const state = store.state.booking

    const showBookingModal = computed(() => state.showBookingModal)

    const checkIn = ref(state.filters.checkIn)
    const checkOut = ref(state.filters.checkOut)
    const pax = ref(state.filters.pax)
    const childs = ref(state.filters.childs)
    const promo_code = ref(state.filters.promo_code)

    const onDateSelected = function (dates) {
      checkIn.value = dates[0]
      checkOut.value = dates[1]
      /* store.dispatch('booking/setFilters', {
        ...state.filters,
        checkIn: dates[0],
        checkOut: dates[1],
      }) */
    }

    const toogleBookingModal = () => {
      store.commit('booking/setShowBookingModal', !state.showBookingModal)
    }

    const setFilters = () => {
      toogleBookingModal()
      store.dispatch('booking/setFilters', {
        checkIn: checkIn.value,
        checkOut: checkOut.value,
        pax: pax.value,
        childs: childs.value,
        promo_code: promo_code.value,
      })
    }

    return {
      showBookingModal,
      toogleBookingModal,
      checkIn,
      checkOut,
      pax,
      childs,
      setFilters,
      onDateSelected,
    }
  },
})
</script>

<style lang="scss" scoped>
.bookign-form {
  background: url('~assets/bookingform-bg.png') no-repeat center;
  background-size: cover;

  .booking-form {
    grid-template-columns:
      minmax(auto, 360px)
      repeat(2, minmax(auto, 160px))
      minmax(auto, 200px);
    display: grid;
    gap: 16px;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  .booking-modal {
    &__container {
      animation: slideDown 0.62s both;
      animation-timing-function: ease;
    }
  }
}
</style>
