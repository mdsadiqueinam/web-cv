<template>
  <section class="mt-10">
    <h2 class="text-3xl font-bold section-title mb-6 border-b-2 border-blue-200 pb-2">
      Key Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
      >
        <h3 class="text-lg font-semibold text-gray-900">{{ project.name }}</h3>
        <p class="text-sm text-gray-500 italic mb-2">{{ project.period }}</p>
        <p class="text-gray-700">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>
