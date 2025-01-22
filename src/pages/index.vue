<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'test',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="container">
		<h1>
			Hello world
		</h1>
	</div>
</template>

<route lang="yaml">
name: home
</route>
