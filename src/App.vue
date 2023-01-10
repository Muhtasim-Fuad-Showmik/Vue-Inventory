<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<main class="h-[90vh] my-0 mx-auto bg-white rounded shadow-[0_0_130px_-50px_rgba(0,108,233,1)] overflow-hidden">
		<div class="flex flex-row min-h-[90vh]">
			<div class="w-80 min-h-[90vh]">
				<header class="h-full flex flex-col bg-white">
					<div class="bg-brandeis-blue">
						<a href="/" class="w-full inline-block p-5 bg-white rounded-bl-lg">
							<div class="flex">
								<img src="/Inventory Logo.png" alt="Inventory Management Logo" class="w-10 h-12 object-cover"/>
								<span
									class="font-Sen font-bold text-xl text-black underline decoration-white  flex flex-col ml-5">
									<p>Inventory</p>
									<p>Management</p>
								</span>
							</div>
						</a>
					</div>
					<ul class="min-h-full m-0 pl-0.5 pt-2 list-none flex-1 text-left bg-brandeis-blue rounded-tr-lg">
						<li
							class="group block m-0 py-4 px-2.5 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
							<RouterLink
								class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5"
								to="/">Dashboard</RouterLink>
						</li>
						<li
							class="group block m-0 py-4 px-2.5 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
							<RouterLink
								class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5"
								to="/about">Products</RouterLink>
						</li>
						<li
							class="group block m-0 py-4 px-2.5 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
							<RouterLink
								class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5"
								to="/">Procurement</RouterLink>
						</li>
						<li
							class="group block m-0 py-4 px-2.5 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
							<RouterLink
								class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5"
								to="/">Inventory</RouterLink>
						</li>
						<li
							class="group block m-0 py-4 px-2.5 border-y-2 transition-all border-transparent hover:border-[#1b82f7]">
							<RouterLink
								class="block bg-transparent px-4 py-2 no-underline text-white transition-all group-hover:drop-shadow-std group-hover:translate-x-{-2px} group-hover:-translate-y-0.5"
								to="/">Analytics</RouterLink>
						</li>
					</ul>
				</header>
			</div>
			<div class="w-full min-h-[90vh]">
				<div class="p-4 h-full border-b-8 border-solid border-brandeis-blue">
					<RouterView />
				</div>
			</div>
		</div>
	</main>
	<footer class="p-4 text-center text-sm">
		<a href="https://peaceful-sable-131357.netlify.app/" target="_blank" class="no-underline hover:underline">
			&#169; Muhtasim Fuad Showmik
		</a>
	</footer>
</template>

<style lang="scss" scoped>

</style>