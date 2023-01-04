<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="h-full flex flex-col bg-white">
    <div class="bg-brandeis-blue">
      <a href="/" class="w-full inline-block pl-2 pt-2 pr-4 pb-5 bg-white rounded-tr-lg ">
        <div class="flex">
          <img src="/Inventory Logo.png" alt="Inventory Management Logo" width="40px" />
          <span class="font-Jost font-bold text-xl text-black underline decoration-white  flex flex-col ml-5">
            <p>Inventory</p>
            <p>Management</p>
          </span>
        </div>
      </a>
    </div>
    <ul class="min-h-full m-0 pl-0.5 pt-2 list-none flex-1 text-left bg-brandeis-blue rounded-tr-lg">
      <li class="group block m-0 pb-30 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
        <RouterLink class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5" to="/">Dashboard</RouterLink>
      </li>
      <li class="group block m-0 pb-30 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
        <RouterLink class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5" to="/about">Products</RouterLink>
      </li>
      <li class="group block m-0 pb-30 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
        <RouterLink class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5" to="/">Procurement</RouterLink>
      </li>
      <li class="group block m-0 pb-30 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
        <RouterLink class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5" to="/">Inventory</RouterLink>
      </li>
      <li class="group block m-0 pb-30 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
        <RouterLink class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5" to="/">Analytics</RouterLink>
      </li>
    </ul>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped></style>