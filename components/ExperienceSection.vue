<template>
  <section class="mt-10">
    <h2 class="text-3xl font-bold section-title mb-6 border-b-2 border-blue-200 pb-2">
      Professional Experience
    </h2>
    <div class="relative border-l-2 border-gray-200 ml-1.5">
      <div
        v-for="(exp, index) in experience"
        :key="index"
        class="mb-8 pl-6 relative timeline-item"
      >
        <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5" />
        <h3 class="text-xl font-semibold text-gray-900">{{ exp.title }}</h3>
        <p class="text-md font-medium text-gray-600">{{ exp.company }} | {{ exp.location }}</p>
        <p class="text-sm text-gray-500 italic">{{ exp.period }}</p>
        <ul class="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li v-for="(responsibility, idx) in exp.responsibilities" :key="idx">
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experience: {
    type: Array,
    required: true,
  },
})
</script>
