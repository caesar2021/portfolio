<template>
	<main class="z-0">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<div class="section" data-anchor="firstPage">
    			<pjay-landing/>
    		</div>
    		<div class="section" data-anchor="secondPage">
    			<h3>Second page</h3>
    		</div>
    	</full-page>
    </main>
</template>

<script setup>
	import PjayLanding from '@/components/Landing.vue'
	const options = {

		anchors:['firstPage', 'secondPage', 'thirdPage']

	}
</script>