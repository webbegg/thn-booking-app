<template>
  <div class="booking-component">
    <div class="py-12">
      <div class="py-8 relative">
        <div class="bg-brand opacity-25 absolute inset-0"></div>
        <div
          class="container mx-auto relative flex justify-center z-0 booking-form"
        >
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
  reactive,
} from '@nuxtjs/composition-api'

import Input from '~/components/ui/Input'
import Button from '~/components/ui/Button'
import PaxSelector from '~/components/ui/PaxSelector'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const state = store.state.booking

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

    const setFilters = () => {
      store.dispatch('booking/setFilters', {
        checkIn: checkIn.value,
        checkOut: checkOut.value,
        pax: pax.value,
        childs: childs.value,
        promo_code: promo_code.value,
      })
    }

    return {
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
.booking-component {
  background: url('~assets/bookingform-bg.png') no-repeat center;
  background-size: cover;

  .booking-form {
    grid-template-columns:
      minmax(auto, 360px)
      repeat(2, minmax(auto, 160px))
      minmax(auto, 200px);
    display: grid;
    gap: 16px;
  }
}
</style>
