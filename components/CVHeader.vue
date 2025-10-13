<template>
  <header class="text-center pb-8 border-b border-gray-200">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
      {{ name }}
    </h1>
    <p class="text-xl md:text-2xl text-blue-700 font-medium mt-2">
      {{ title }}
    </p>
  </header>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
