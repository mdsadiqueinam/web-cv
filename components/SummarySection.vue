<template>
  <section>
    <h2 class="text-3xl font-bold section-title mb-4">Summary</h2>
    <p class="text-gray-700 leading-relaxed">
      {{ summary }}
    </p>
  </section>
</template>

<script setup>
defineProps({
  summary: {
    type: String,
    required: true,
  },
})
</script>
