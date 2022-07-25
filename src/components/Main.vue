<template>
	<main class="z-0">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<div class="section" data-anchor="home">
    			<pjay-landing/>
    		</div>
    		<div class="section fp-auto-height-responsive" data-anchor="intro">
                <pjay-intro/>
    		</div>
    		<div class="section" data-anchor="skills">
    			
    		</div>
    		<div class="section" data-anchor="contact">
    			
    		</div>
    	</full-page>
    </main>
</template>

<script setup>
	import PjayLanding from '@/components/Landing.vue'
	import PjayIntro from '@/components/Intro.vue'
	const options = {

		anchors:['home', 'intro', 'skills', 'contact'],
        sectionsColor: [ '#475569', '#0ea5e9', '#8b5cf6', '#ec4899' ],
        
	}
</script>