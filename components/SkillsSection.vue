<template>
  <div class="bg-gray-50 p-6 rounded-xl mt-6">
    <h2 class="text-2xl font-semibold section-title mb-4 border-b-2 border-blue-200 pb-2">
      Skills
    </h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in skills"
        :key="skill.name"
        :class="getSkillClass(skill.color)"
        class="text-sm font-medium px-3 py-1 rounded-full"
      >
        {{ skill.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
})

const getSkillClass = (color) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-200 text-gray-800',
  }
  return colorMap[color] || 'bg-gray-200 text-gray-800'
}
</script>
