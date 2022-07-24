<template>
	<header class="absolute inset-x-0 top-0">
      <div class="p-10 flex items-center justify-between">
        <pjay-logo/>
        <div class="flex gap-5 font-semibold">
          <a href="#">
            About
          </a>
          <a href="#">
            Skills
          </a>
          <a href="#">
            Contact
          </a>
        </div>
      </div>
    </header>
</template>

<script setup>
  import PjayLogo from '@/components/Logo.vue'
</script>