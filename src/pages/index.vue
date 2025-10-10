<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'YNM Tool',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="bg-gray-200">
		<div
			class="container h-screen w-screen flex justify-center items-center"
		>
			<div class="px-5 py-4 bg-white rounded-lg flex flex-col items-center gap-y-4">
				<h1 class="text-3xl font-poppins">
					<span class="text-blue-500 font-extrabold">YNM</span> Tool
				</h1>

				<div class="links flex flex-col items-center gap-y-4">

					<router-link
						:to="{ name: 'sugestion-box' }"
						class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
						Isi Kotak Saran Disini
					</router-link>
					<router-link
						:to="{ name: 'making-graph' }"
						class="text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
						Lihat Statistik Quiz
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
