<script setup>
	import {ref} from 'vue';
	import {supabase} from '../utils/supabase';

	const tableName = import.meta.env.VITE_SUGESTION_BOX_TABLE_NAME;

	useHead({
		title: 'Kotak Saran',
	});

	const selectedOption = ref('');
	const textareaContent = ref('');
	const submittedData = ref(null);
	const loading = ref(false);

	const submitForm = () => {
		loading.value = true;
		if (selectedOption.value && textareaContent.value) {

			submittedData.value = {
				selectedOption: selectedOption.value,
				textareaContent: textareaContent.value
			};

			console.log('Form submitted:', submittedData.value);
			insertFeedback()
				.then(() => {
					alert('Feedback submitted successfully!');
					selectedOption.value = '';
					textareaContent.value = '';
					submittedData.value = null;
				})
				.catch((error) => {
					console.error('Error submitting feedback:', error);
				})
				.finally(() => {
					loading.value = false;
				})
		};
	};

	const testConnection = async () => {
		try {
			const { data, error } = await supabase
				.from(tableName)
				.select()

				if (error) {
					console.error('Error Test Connection',error);
				}

		} catch (error) {
			console.error('Error Test Connection',error);
		}
	}

	const insertFeedback = async () => {
		try {
			const { data, error } = await supabase
				.from(tableName)
				.insert([
					{
						feeling: submittedData.value.selectedOption,
						feedback: submittedData.value.textareaContent
					}
				])

				if (error) {
					throw new Error(error.message);
				}

				console.log('Feedback Inserted:', data);

		} catch (error) {
			console.error('Error Insert Feedback',error);
		}
	}

</script>

<template>
	<div class="h-screen w-screen bg-[#8E8E93] relative">
		<div class="container flex justify-center items-center h-full">
			<div class="box py-[50px] md:px-10 px-6 bg-white md:rounded-[11px] flex flex-col xl:gap-y-11 gap-y-5 xl:w-[614px] w-full md:w-max h-screen md:h-max">
				<div class="heading">
					<h1 class="lg:text-[2rem] text-[27px] font-medium text-center md:text-start">
						Feedback
					</h1>
				</div>
				<form class="form flex flex-col gap-y-9" @submit.prevent="submitForm">
					<div class="feeling-input flex flex-col gap-y-4">
						<label for="feeling" class="lg:text-base md:text-base text-[15px] text-center md:text-start">Perasaanmu setelah ikut KEY by YukNgaji Makassar</label>
						<div class="emoticon-radio-buttons flex gap-x-4 justify-center md:justify-start">
							<div class="emot-radio-wrapper relative w-max">
								<div class="emoticon px-[0.3rem] py-2 w-max rounded-full text-3xl" :class="selectedOption === 'happy' ? 'bg-[#8E8E93]' : 'bg-[#D9D9D9]' ">
									😊
								</div>
								<input v-model="selectedOption" type="radio" value="happy" name="feeling" id="feeling-1" class="emot-radio absolute top-[1px] left-[0.7px] w-[50px] h-[50px] hover:cursor-pointer opacity-0">
							</div>
							<div class="emot-radio-wrapper relative w-max">
								<div class="emoticon px-[0.3rem] py-2 w-max rounded-full text-3xl" :class="selectedOption === 'neutral' ? 'bg-[#8E8E93]' : 'bg-[#D9D9D9]' ">
									😐
								</div>
								<input v-model="selectedOption" type="radio" value="neutral" name="feeling" id="feeling-2" class="emot-radio absolute top-[1px] left-[0.7px] w-[50px] h-[50px] hover:cursor-pointer opacity-0">
							</div>
							<div class="emot-radio-wrapper relative w-max">
								<div class="emoticon px-[0.3rem] py-2 w-max rounded-full text-3xl" :class="selectedOption === 'unhappy' ? 'bg-[#8E8E93]' : 'bg-[#D9D9D9]' ">
									😒
								</div>
								<input v-model="selectedOption" type="radio" value="unhappy" name="feeling" id="feeling-3" class="emot-radio absolute top-[1px] left-[0.7px] w-[50px] h-[50px] hover:cursor-pointer opacity-0">
							</div>
						</div>
					</div>
					<div class="feedback-input flex flex-col gap-y-4">
						<label for="feedback-area" class="text-[15px] md:text-base text-center md:text-start">
							Kalau kamu punya feedback feel free ya dikirim disini hehe
						</label>
						<textarea v-model="textareaContent" name="feedback" id="feedback-area" placeholder="Kalau menurutku.........." class="rounded-md border border-[#E4E4E7] min-h-[220px] text-[15px] md:text-base"></textarea>
						<button type="submit" class="text-sm text-white bg-[#18181B] hover:bg-[#27272A] py-2 rounded-md duration-200 disabled:bg-[#8E8E93]" :disabled="loading">
							{{ loading ? 'Loading...' : 'Kirim' }}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: sugestion-box
</route>
