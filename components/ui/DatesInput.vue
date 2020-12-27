<template>
  <div class="grid grid-cols-2 gap-4">
    <Input
      :value="checkIn"
      :icon="require('~/assets/calendar.svg')"
      @iconPressed="showDatepicker = true"
      readonly
    />
    <Input
      :value="checkOut"
      :icon="require('~/assets/calendar.svg')"
      @iconPressed="showDatepicker = true"
      readonly
    />

    <div class="fixed inset-0" v-if="showDatepicker">
      <div class="bg-black absolute opacity-75 inset-0 z-10"></div>
      <div
        class="absolute inset-0 z-20 flex justify-center items-center"
        @click="showDatepicker = false"
      >
        <div
          class="bg-white shadow-lg rounded-lg p-10 font-semibold relative flex flex-col"
          @click.stop="() => {}"
        >
          <DatePicker
            inline
            range
            :disabled-date="
              (date) => date < new Date(new Date().setHours(0, 0, 0, 0))
            "
            format="DD/MM/YYYY"
            class="shadow-lg"
            v-model="selectedDates"
            @input="onDateSelected"
          />
          <Button class="mt-6" @click="onApplyChanges">Apply dates</Button>
          <div
            @click.stop="showDatepicker = false"
            class="cursor-pointer absolute top-0 right-0 -mr-4 -mt-4 w-10 h-10 rounded-full shadow-lg bg-white flex justify-center items-center"
          >
            <img src="~/assets/x.svg" alt="Close button icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format, parse } from 'date-fns'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  props: {
    checkIn: String,
    checkOut: String,
  },
  components: { DatePicker },
  data() {
    return {
      showDatepicker: false,
      selectedDates: [
        parse(this.checkIn, 'dd/MM/yyyy', new Date()),
        parse(this.checkOut, 'dd/MM/yyyy', new Date()),
      ],
    }
  },
  methods: {
    onDateSelected(e) {
      const [checkIn, checkOut] = e
      selectedDates: [
        parse(checkIn, 'dd/MM/yyyy', new Date()),
        parse(checkOut, 'dd/MM/yyyy', new Date()),
      ]
    },
    onApplyChanges() {
      const [checkIn, checkOut] = this.selectedDates
      this.$emit('input', [
        format(checkIn, 'dd/MM/yyyy'),
        format(checkOut, 'dd/MM/yyyy'),
      ])
      this.showDatepicker = false
    },
  },
}
</script>
