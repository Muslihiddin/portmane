<script setup lang="ts">
import BurgerMenu from "./BurgerMenu.vue";
</script>
<template>
  <div class="container mx-auto pt-8 px-8 flex items-center justify-between">
    <h3 class="text-3xl">Muslihiddin Kuchkorov</h3>
    <ul class="hidden lg:flex items-center gap-x-10 text-xl">
      <li class="flex items-center">
        <img src="../assets/icons/hashtag.svg" class="w-3" />
        <router-link to="/" class="text-gray hover:text-white duration-150"
          >home</router-link
        >
      </li>
      <li class="flex items-center">
        <img src="../assets/icons/hashtag.svg" class="w-3" />
        <router-link
          to="projects"
          class="text-gray hover:text-white duration-150"
          >works</router-link
        >
      </li>
      <li class="flex items-center">
        <img src="../assets/icons/hashtag.svg" class="w-3" />
        <router-link to="about" class="text-gray hover:text-white duration-150"
          >about-me</router-link
        >
      </li>
      <li class="flex items-center">
        <img src="../assets/icons/hashtag.svg" class="w-3" />
        <router-link
          to="contacts"
          class="text-gray hover:text-white duration-150"
          >contacts</router-link
        >
      </li>
    </ul>
    <burger-menu />
  </div>
</template>
