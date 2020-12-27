<template>
  <header class="p-3">
    <nav class="container mx-auto text-lg text-gray-700">
      <a href="#" class="hidden md:flex items-center hover:text-brand">
        Home
      </a>
      <a href="#" class="hidden md:flex items-center hover:text-brand">
        Rooms
      </a>
      <a href="#" class="hidden md:flex items-center hover:text-brand">
        Restaurant
      </a>

      <a href="#" class="flex items-center justify-start lg:justify-center">
        <img class="logo" src="~/assets/logo.png" alt="Logo los cocos" />
      </a>

      <a
        href="#"
        class="hidden md:flex items-center justify-end hover:text-brand"
      >
        Weedings
      </a>
      <a
        href="#"
        class="hidden md:flex items-center justify-end hover:text-brand"
      >
        Membership
      </a>
      <a
        href="#"
        class="hidden md:flex items-center justify-end hover:text-brand"
      >
        Contact
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  nav {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(7, 1fr);

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
