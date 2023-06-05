<script setup lang="ts">
import { ref } from 'vue'
import IconLogo from '@/components/icons/IconLogo.vue'

const menuIsOpen = ref(false)
</script>

<template>
  <header class=" absolute top-0 left-0 w-full z-20 flex items-center justify-between px-4 gap-8 h-20">
    <a href="/">
      <IconLogo />
    </a>
    <button class="h-3 w-6 flex flex-col justify-between lg:hidden"
     @pointerdown="menuIsOpen = !menuIsOpen">
      <span class="block h-[2px] w-full bg-white transition duration-300"
      :class="{'translate-y-[5px] rotate-45':menuIsOpen }"></span>
      <span class="block h-[2px] w-full bg-white transition duration-300"
      :class="{'-translate-y-[5px] -rotate-45':menuIsOpen }"></span>
    </button>
    <nav
      class="invisible opacity-0 fixed z-10 bg-black inset-0 mt-20 flex flex-col justify-between py-12 px-6 lg:visible lg:opacity-100 lg:static lg:mt-0 lg:flex-row lg:bg-transparent lg:flex-1"
      :class="{ '!visible !opacity-100': menuIsOpen }"
    >
      <ul class="flex flex-col items-center gap-10 lg:gap-4 lg:flex-row text-base lg:text-xs">
        <li><RouterLink to="movie" class="block p-4 text-white">Movies</RouterLink></li>
        <li><RouterLink to="serie" class="block p-4 text-white">Series</RouterLink></li>
        <li><RouterLink to="podcast" class="block p-4 text-white">Podcast</RouterLink></li>
        <li><RouterLink to="book" class="block p-4 text-white">Book</RouterLink></li>
        <li><a class="block p-4 text-white" href="">Filter</a></li>
      </ul>
      <div class="flex items-center gap-4 px-4">
        <a class="block p-4 text-white" href="">Sign In</a>
        <button class="flex-1 p-3 none bg-blue font-bold text-white lg:flex-none lg:px-6px">
          Log in
        </button>
      </div>
    </nav>
  </header>
</template>

