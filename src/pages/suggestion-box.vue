<script setup>
	import {ref} from 'vue';
	useHead({
		title: 'Kotak Saran',
	});

	const selectedOption = ref('');
	const textareaContent = ref('');
	const submittedData = ref(null);

	const submitForm = () => {
		if (selectedOption.value && textareaContent.value) {

			submittedData.value = {
				selectedOption: selectedOption.value,
				textareaContent: textareaContent.value
			};

			console.log('Form submitted:', submittedData.value);
		};
	};
</script>

<template>
	<div class="h-screen w-screen bg-[#8E8E93]">
		<div class="container flex justify-center items-center h-full">
			<div class="box py-[50px] px-10 bg-white rounded-[11px] flex flex-col gap-y-11 min-w-[614px]">
				<div class="heading">
					<h1 class="text-[2rem] font-medium">
						Feedback
					</h1>
				</div>
				<form class="form flex flex-col gap-y-9" @submit.prevent="submitForm">
					<div class="feeling-input flex flex-col gap-y-4">
						<label for="feeling">Perasaanmu setelah ikut KEY by YukNgaji Makassar</label>
						<div class="emoticon-radio-buttons flex gap-x-4">
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
						<label for="feedback-area">
							Kalau kamu punya feedback feel free ya dikirim disini hehe
						</label>
						<textarea v-model="textareaContent" name="feedback" id="feedback-area" placeholder="Kalau menurutku.........." class="rounded-md border border-[#E4E4E7] min-h-[220px]"></textarea>
						<button type="submit" class="text-sm text-white bg-[#18181B] hover:bg-[#27272A] py-2 rounded-md duration-200">
							Kirim
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
