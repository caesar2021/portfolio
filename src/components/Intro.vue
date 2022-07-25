<template>
	<div class="flex flex-col font-semibold text-gray-200 px-10">
		<div class="flex justify-center ">
			<div class="pb-3 w-full max-w-sm">
				<h4 class="text-3xl">Intro</h4>
				<p>{{ $t("introContent", { fullName, age, address }) }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	
	import moment from 'moment'

	const fullName = import.meta.env.VITE_FULL_NAME
	const address = import.meta.env.VITE_ADDRESS
	const age = moment().diff( moment(import.meta.env.VITE_BIRTH_DATE), 'years')

</script>