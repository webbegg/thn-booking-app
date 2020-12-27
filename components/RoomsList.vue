<template>
  <div class="">
    <RoomsListItem v-for="room in rooms" :key="room.id" :room="room" />
  </div>
</template>
<script>
export default {
  props: {
    rooms: Array | null,
    selected: Boolean,
  },
}
</script>
