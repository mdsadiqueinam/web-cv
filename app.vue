<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'MD Sadique Inam - Senior Software Developer',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  ],
})
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc; /* Tailwind gray-50 */
}

.container {
  max-width: 1100px;
}

.section-title {
  color: #1e3a8a; /* Tailwind blue-800 */
}

/* Print-specific styles */
@media print {
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .container {
    box-shadow: none !important;
    margin: 0 !important;
    max-width: 100% !important;
    border-radius: 0 !important;
    padding: 0 !important;
  }
  .shadow-2xl,
  .hover\:shadow-lg:hover {
    box-shadow: none !important;
  }

  .grid > div,
  section,
  .timeline-item {
    break-inside: avoid;
  }
}
</style>
