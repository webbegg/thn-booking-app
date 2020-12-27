<template>
  <select
    class="py-4 px-4 w-full bg-transparent focus:outline-none font-semibold text-center"
    :value="value"
    @input="onChange($event.currentTarget.value)"
  >
    <option :value="0">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      0
    </option>
    <option :value="1">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      1
    </option>
    <option :value="2">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      2
    </option>
    <option :value="3">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      3
    </option>
    <option :value="4">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      4
    </option>
    <option :value="5">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      5
    </option>
    <option :value="6">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      6
    </option>
    <option :value="7">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      7
    </option>
    <option :value="8">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      8
    </option>
    <option :value="9">
      <span v-if="prefix">{{ `${prefix}:` }}</span>
      9
    </option>
  </select>
</template>
<script>
export default {
  props: {
    prefix: String | Number,
    value: String | Number,
  },
  data() {
    return {
      menuOpen: true,
    }
  },
  methods: {
    onChange(value) {
      this.$emit('input', value || 0)
    },
  },
}
</script>
