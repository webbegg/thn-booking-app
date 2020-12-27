<template>
  <div class="text-lg">
    <h1 class="title-2">Reservation Summary</h1>
    <div class="mt-10 flex flex-wrap xl:block">
      <div v-if="room" class="title w-full xl:w-auto">
        {{ room.description }}
      </div>

      <div class="mt-4 flex w-full md:w-1/2 lg:w-1/3 xl:w-full">
        <div class="mr-10">
          <div class="font-bold">Check In</div>
          <div>From 15.00h</div>
        </div>
        <div>
          <div class="font-bold">Check Out</div>
          <div>Before 12.00h</div>
        </div>
      </div>

      <div class="mt-4 w-full md:w-1/2 lg:w-1/3 xl:w-full">
        <div class="font-bold text-left md:text-right lg:text-left">
          Reservation date
        </div>
        <div class="text-left md:text-right lg:text-left">
          From
          <span class="font-semibold px-2">{{ checkIn }}</span>
          to
          <span class="font-semibold px-2">{{ checkOut }}</span>
        </div>
      </div>

      <div class="mt-4 w-full lg:w-1/3">
        <div class="font-bold">People</div>
        <div class="flex">
          <div class="mr-10">
            <div>
              Adults: <span class="font-semibold">{{ pax }}</span>
            </div>
          </div>
          <div v-if="childs > 0">
            <div>
              Children: <span class="font-semibold">{{ childs }}</span>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-10 border-gray-light w-full" v-if="room && promoCode" />

      <div
        class="xl:flex justify-between sm:text-sm md:text-xl w-1/2 xl:w-full"
        v-if="room && promoCode"
      >
        <div class="font-bold">Room price:</div>
        <div class="font-extrabold">{{ room.price }}€</div>
      </div>
      <div
        class="xl:flex justify-between sm:text-sm md:text-xl w-1/2 xl:w-full"
        v-if="room && promoCode"
      >
        <div class="font-bold text-right">Promo code:</div>
        <div class="font-extrabold text-right">-{{ discount }}€</div>
      </div>

      <hr v-if="room" class="my-10 border-gray-light w-full" />

      <div v-if="room" class="flex justify-between text-3xl w-full">
        <div class="font-bold">Total</div>
        <div class="font-extrabold ml-auto">{{ total }}€</div>
      </div>

      <Button v-if="room" class="mt-10 w-full" @click="saveLocalData">
        Save
      </Button>
    </div>
  </div>
</template>
<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const state = store.state.booking

    const room = computed(() => state.selectedRoom)
    const checkIn = computed(() => state.filters.checkIn)
    const checkOut = computed(() => state.filters.checkOut)
    const pax = computed(() => state.filters.pax)
    const childs = computed(() => state.filters.childs)
    const promoCode = computed(() => state.filters.promo_code)

    const discount = computed(
      () => (Number(state.selectedRoom.price) * 10) / 100
    )
    const total = computed(() => {
      let total = Number(state.selectedRoom.price)
      if (state.filters.promo_code) {
        total -= (total * 10) / 100
      }
      return total
    })

    const saveLocalData = async () => {
      store.dispatch('booking/saveLocalData')
    }

    return {
      room,
      checkIn,
      checkOut,
      pax,
      childs,
      saveLocalData,
      promoCode,
      discount,
      total,
    }
  },
})
</script>
