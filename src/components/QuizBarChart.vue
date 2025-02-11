<template>
	<div class="chart-container mt-6 max-w-[85%]">
		<canvas id="quiz-chart"></canvas>
	</div>
</template>

<script setup>
	import Chart from 'chart.js/auto';
	import {onMounted} from 'vue'

	// define props to receive data from parent component
	const props = defineProps({
		data: Array
	})

	// when mounted
	onMounted(() => {
		if (!props.data.length) return
		initGraph();
	})

	// when data changes
	watch(() => props.data, (newData) => {
		initGraph();
	})

	const initGraph = async function () {
		const data = props.data;

		// clear canvas
		const canvas = document.getElementById('quiz-chart');
		canvas.remove();

		// create canvas
		const canvasElement = document.createElement('canvas');
		canvasElement.id = 'quiz-chart';
		document.querySelector('.chart-container').appendChild(canvasElement);


		new Chart(document.getElementById('quiz-chart'), {
			type: 'bar',
			data: {
				labels: data.map(row => row.label),
				datasets: [
					{
						label: 'Statistik Quiz',
						data: data.map(row => row.value),
						backgroundColor: data.map(row => row.backgroundColor),

					},
				],
			},
			options: {
				plugins: {
					tooltip: {
						callbacks: {
							title: function (rowItem) {
								const question = props.data[rowItem[0].dataIndex].question;
								// console.log(question);
								return `No.${rowItem[0].dataIndex+1} ${question}`;
							},
							footer: function (rowItem) {
								return `Persentase Benar: ${rowItem[0].parsed.y} %`;
							}
						},
						bodyColor: '#fff',
					}
				}
			}
		});
	};

	// create tooltip to show question and persentage of each bar
	const tooltipOptions = () => {
		return {
			enabled: true,
			mode: 'index',
			intersect: false,
			callbacks: {
				label: function (tooltipItem) {
					return `${tooltipItem.label}: ${tooltipItem.parsed.y} %`;
				},
			},
		};
	}

</script>

<style scoped>
</style>
