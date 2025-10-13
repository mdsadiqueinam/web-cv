<template>
  <div class="bg-gray-50 p-6 rounded-xl">
    <h2
      class="text-2xl font-semibold section-title mb-4 border-b-2 border-blue-200 pb-2"
    >
      Contact & Links
    </h2>
    <ul class="space-y-3 text-gray-700">
      <li
        v-for="(item, index) in contacts"
        :key="index"
        class="flex items-center"
      >
        <!-- Dynamic Icon -->
        <component
          :is="iconComponents[item.icon]"
          class="w-5 h-5 mr-3 text-blue-600"
        />

        <!-- Display value as link or plain text -->
        <a
          v-if="item.link"
          :href="item.link"
          :target="item.type !== 'email' ? '_blank' : undefined"
          :rel="item.type !== 'email' ? 'noopener noreferrer' : undefined"
          class="truncate hover:text-blue-700"
        >
          {{ item.value }}
        </a>
        <span v-else>{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import EnvelopeIcon from "~/assets/icons/envelope.svg";
import MapPinIcon from "~/assets/icons/map-pin.svg";
import GithubIcon from "~/assets/icons/github.svg";
import LinkedinIcon from "~/assets/icons/linkedin.svg";

defineProps({
  contacts: {
    type: Array,
    required: true,
  },
});

const iconComponents = {
  envelope: EnvelopeIcon,
  "map-pin": MapPinIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};
</script>
