<template>
  <label class="flex items-center bg-white px-4 text-gray-700">
    <input
      :name="name"
      :value="value"
      @input="onChange"
      type="text"
      class="py-4 w-full bg-transparent focus:outline-none font-semibold text-center"
      :readonly="readonly"
    />
    <img
      v-if="icon"
      :src="icon"
      class="cursor-pointer duration-150 ease-in-out"
      @click="onIconPressed"
    />
  </label>
</template>
<script>
export default {
  props: {
    type: { type: String, default: 'string' },
    name: { type: String, require: true },
    value: { type: String | Number },
    icon: { type: String },
    readonly: Boolean,
  },
  methods: {
    onChange(e) {
      let value = e.target.value
      this.$emit('input', value)
    },
    onIconPressed() {
      this.$emit('iconPressed')
    },
  },
}
</script>
<style lang="scss" scoped>
img {
  &:hover {
    transform: scale(1.12);
  }
  &:active {
    transform: scale(0.98);
  }
}
</style>
