<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <main class="h-[90vh] my-0 mx-auto bg-white rounded shadow-[0_0_130px_-50px_rgba(0,108,233,1)] w-full">
        <div class="flex flex-row w-full min-h-[90vh]">
            <div class="max-[600px]:min-w-[80px] min-w-[200px] min-h-[90vh]">
                <header class="flex flex-col min-h-full bg-white">
                    <div class="bg-brandeis-blue">
                        <a href="/" class="inline-block w-full p-5 bg-white rounded-bl-lg">
                            <div class="flex">
                                <img src="/Inventory Logo.png" alt="Inventory Management Logo"
                                    class="object-cover w-10 h-12" />
                                <span
                                    class="flex flex-col ml-2 text-xl font-bold text-black underline font-Sen decoration-white max-[600px]:hidden">
                                    <p>Inventory</p>
                                    <p>Management</p>
                                </span>
                            </div>
                        </a>
                    </div>
                    <ul class="min-h-full m-0 pl-0.5 pt-2 list-none flex-1 text-left bg-brandeis-blue rounded-tr-lg">
                        <li
                            class="group block m-0 py-4 px-2.5 border-y transition-all border-transparent hover:border-[#1b82f7]">
                            <RouterLink
                                class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5 flex items-center"
                                to="/">
                                <span>
                                    <i class="mr-5 text-2xl fa-solid fa-gauge"></i>
                                </span>
                                <span class="max-[600px]:hidden">Dashboard</span>
                            </RouterLink>
                        </li>
                        <li
                            class="group block m-0 py-4 px-2.5 border-y transition-all border-transparent hover:border-[#1b82f7]">
                            <RouterLink
                                class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5 flex items-center"
                                to="/products">
                                <span>
                                    <i class="mr-5 text-2xl fa-solid fa-basket-shopping"></i>
                                </span>
                                <span class="max-[600px]:hidden">Products</span>
                            </RouterLink>
                        </li>
                        <li
                            class="group block m-0 py-4 px-2.5 border-y transition-all border-transparent hover:border-[#1b82f7]">
                            <RouterLink
                                class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5 flex items-center"
                                to="/procurements">
                                <span>
                                    <i class="mr-5 text-2xl fa-solid fa-truck-ramp-box"></i>
                                </span>
                                <span class="max-[600px]:hidden">Procurement</span>
                            </RouterLink>
                        </li>
                        <li
                            class="group block m-0 py-4 px-2.5 border-y transition-all border-transparent hover:border-[#1b82f7]">
                            <RouterLink
                                class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5 flex items-center"
                                to="/">
                                <span>
                                    <i class="mr-5 text-2xl fa-solid fa-warehouse"></i>
                                </span>
                                <span class="max-[600px]:hidden">Inventory</span>
                            </RouterLink>
                        </li>
                        <li
                            class="group block m-0 py-4 px-2.5 border-y transition-all border-transparent hover:border-[#1b82f7]">
                            <RouterLink
                                class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5 flex items-center"
                                to="/">
                                <span>
                                    <i class="mr-5 text-2xl fa-solid fa-chart-pie"></i>
                                </span>
                                <span class="max-[600px]:hidden">Analytics</span>
                            </RouterLink>
                        </li>
                    </ul>
                </header>
            </div>
            <div class="w-full min-h-[90vh]">
                <div class="h-full p-4 border-b-8 border-solid border-brandeis-blue">
                    <RouterView />
                </div>
            </div>
        </div>
    </main>
    <footer class="p-4 text-sm text-center">
        <a href="https://peaceful-sable-131357.netlify.app/" target="_blank" class="no-underline hover:underline">
            &#169; Muhtasim Fuad Showmik
        </a>
    </footer>
</template>

<style lang="scss" scoped>

</style>
