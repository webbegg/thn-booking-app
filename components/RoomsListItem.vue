<template>
  <div :class="roomClass" @click="roomSelected">
    <img
      :src="roomImage"
      :alt="roomImageAlt"
      class="-mt-12 md:mt-0 md:-ml-12 md:w-2/4"
    />
    <div class="md:ml-10 md:w-2/4">
      <h3 class="title-2 mb-2 mt-4 md:mt-0">{{ room.description }}</h3>
      <p>{{ room.details }}</p>
      <div class="my-8">Size: {{ room.size }}m2</div>
      <div class="flex justify-between items-end">
        <div>
          <img src="~/assets/double-bed.svg" alt="Bed icon" />
          <p class="mt-2">Beds: {{ room.beds }}</p>
        </div>
        <div>People: {{ room.pax }}</div>
        <div class="flex flex-col">
          <div
            class="text-right w-full line-through text-red font-semibold"
            v-if="discount"
          >
            {{ room.price }}€
          </div>
          <div class="text-2xl font-semibold">{{ total }}€</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    room: Object | null,
  },
  setup({ room }) {
    const { store } = useContext()
    const state = store.state.booking
    const roomClass = computed(() => {
      const isSelected =
        store.state.booking.selectedRoom &&
        store.state.booking.selectedRoom.id === room.id

      return `border cursor-pointer p-8 text-lg flex flex-col md:flex-row mt-12 md:mt-0 md:mx-0 md:items-center select-none transition duration-500 ease-in-out ${
        isSelected
          ? 'bg-gray-soft shadow-selected border-gray-light'
          : 'bg-white border-gray-light'
      }`
    })
    const roomImage = computed(() => require(`~/assets/room_${room.id}.png`))
    const roomImageAlt = computed(() => `${room.description} photo`)

    const roomSelected = () => {
      store.dispatch('booking/setSelectedRoom', room)
    }

    const discount = computed(() =>
      state.filters.promo_code ? (Number(room.price) * 10) / 100 : 0
    )
    const total = computed(() => {
      let total = Number(room.price)
      if (state.filters.promo_code) {
        total -= (total * 10) / 100
      }
      return total
    })

    return {
      roomClass,
      roomImage,
      roomImageAlt,
      roomSelected,
      discount,
      total,
    }
  },
})
</script>
