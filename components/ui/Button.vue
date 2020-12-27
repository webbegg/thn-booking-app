<template>
  <button
    :class="`py-4 px-4 flex justify-center items-center bg-${bg} text-white text-lg font-bold focus:outline-none duration-200 ease-in-out`"
    @click="onClick"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    bg: {
      default: 'brand',
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
<style lang="scss" scoped>
button:active {
  transform: scale(0.92);
}
</style>
