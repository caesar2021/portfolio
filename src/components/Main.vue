<template>
	<main class="z-0">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<div class="section" data-anchor="firstPage">
    			<pjay-intro/>
    		</div>
    		<div class="section" data-anchor="secondPage">
    			<h3>Second page</h3>
    		</div>
    	</full-page>
    </main>
</template>

<script setup>
	import PjayIntro from '@/components/Intro.vue'
	const options = {

		anchors:['firstPage', 'secondPage', 'thirdPage']

	}
</script>