<template>
  <section class="mt-10">
    <h2 class="text-3xl font-bold section-title mb-6 border-b-2 border-blue-200 pb-2">
      Education
    </h2>
    <div class="relative border-l-2 border-gray-200 ml-1.5">
      <div
        v-for="(edu, index) in education"
        :key="index"
        :class="{ 'mb-6': index < education.length - 1 }"
        class="pl-6 relative timeline-item"
      >
        <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5" />
        <h3 class="text-xl font-semibold text-gray-900">{{ edu.degree }}</h3>
        <p class="text-md text-gray-600">{{ edu.institution }} | {{ edu.location }}</p>
        <p class="text-sm text-gray-500 italic">{{ edu.period }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  education: {
    type: Array,
    required: true,
  },
})
</script>
