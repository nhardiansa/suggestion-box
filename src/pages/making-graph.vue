<script setup>
	useHead({
		title: 'Statistik Quiz',
	});

	import Papa from 'papaparse';
	import QuizBarChart from '@/components/QuizBarChart.vue';
	import {ref, reactive, onMounted} from 'vue';

	const dataToGraph = ref([]);

	// get file path when user choose file
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			const csvData = reader.result;
			const parsedData = Papa.parse(csvData, { header: true });
			let result = parsedData.data;

			result = result.sort((a, b) => parseInt(a.No) - parseInt(b.No));
			result = result.map((row) => {
				return {
					label: `Pertanyaan No.${row.No}`,
					value: Math.round(row['Persentase Benar (%)'] * 100),
					question: row['Pertanyaan'],
					// set background color
					// if under 80% set to red, if above 80% set to green
					backgroundColor: Math.round(row['Persentase Benar (%)'] * 100) <= 80 ? '#fb6962' : '#0cc078',
				}
			});
			result.pop()
			console.log(result);

			// set data to reactive data
			dataToGraph.value = result;
		};
		reader.readAsText(file);
	}


</script>

<template>
	<div class="container">
		<div class="content-wrapper mt-5">
			<h1>Masukan Data Quiz</h1>

			<div class="input-wrapper mt-4">
				<label
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					for="file_input"
					>Pilih File</label
				>
				<input
					class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 max-w-80"
					id="file_input"
					type="file"
					@change="handleFileChange"
				/>
			</div>

			<QuizBarChart :data="dataToGraph" />
		</div>
	</div>
</template>

<route lang="yaml">
name: making-graph
</route>
