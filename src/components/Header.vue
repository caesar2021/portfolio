<template>
	<header class="absolute inset-x-0 top-0 font-semibold text-gray-200 z-40">
      <div class="p-10 flex items-center justify-between">
        <pjay-logo/>
        <div class="flex gap-5">
          <a href="/#intro">
            About
          </a>
          <a href="/#skills">
            Skills
          </a>
          <a href="/#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
</template>

<script setup>
  import PjayLogo from '@/components/Logo.vue'
</script>