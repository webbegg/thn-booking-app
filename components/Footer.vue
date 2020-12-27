<template>
  <footer class="border-t border-gray-light mt-10">
    <div class="px-10 py-4 flex flex-col xl:flex-row items-center">
      <img
        src="~assets/logo-footer.png"
        alt="Logo footer Los Cocos Bungalows"
        class="mr-8"
      />
      <nav class="flex my-3 xl:my-0">
        <a href="#" class="mr-3 hover:text-brand">Terms and conditions</a>
        <a href="#" class="mr-3 hover:text-brand">Privacy Policy</a>
        <a href="#" class="mr-3 hover:text-brand">About us</a>
        <a href="#" class="mr-3 hover:text-brand">Partners</a>
      </nav>
      <nav
        class="flex items-center mb-3 flex-col sm:flex-row xl:mb-0 xl:ml-auto"
      >
        <a
          href="mailto:reservations@loscocosbungalows.com"
          class="text-brand hover:underline"
        >
          reservations@loscocosbungalows.com
        </a>
        <span class="px-4">-</span>
        <a href="tel:0034987675432" class="text-brand hover:underline mr-3">
          Tlf: +34 987 675 432
        </a>
      </nav>
      <nav class="flex items-center">
        <a href="#" class="icon icon-rss hover:bg-gray-soft">&nbsp;</a>
        <a href="#" class="icon icon-facebook hover:bg-gray-soft">&nbsp;</a>
        <a href="#" class="icon icon-instagram hover:bg-gray-soft">&nbsp;</a>
        <a href="#" class="icon icon-twitter hover:bg-gray-soft">&nbsp;</a>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss">
.icon {
  background: url('~assets/footer_icons.png') no-repeat;
  background-size: cover;
  border: 1px solid white;
  display: block;
  width: 50px;
  height: 50px;

  &-rss {
    background-position: -200px 0;
  }

  &-facebook {
    background-position: -240px 0;
  }

  &-instagram {
    background-position: -280px 0;
  }

  &-twitter {
    background-position: -320px 0;
  }
}
</style>
