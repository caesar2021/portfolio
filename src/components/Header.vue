<template>
	<header class="absolute inset-x-0 top-0">
      <div class="p-10 flex items-center justify-between">
        <div class="flex items-center">
          <pjay-logo/>
          <h1 class="hidden md:inline-block">PJay</h1>
        </div>
        <div class="flex gap-5">
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