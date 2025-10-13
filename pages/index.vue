<template>
  <div
    class="container mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-2xl rounded-2xl my-8"
  >
    <!-- Header Section -->
    <CVHeader
      :name="cvData.personalInfo.name"
      :title="cvData.personalInfo.title"
    />

    <!-- Contact & Summary Section -->
    <div class="flex flex-col md:flex-row mt-8">
      <!-- Contact Info -->
      <aside class="w-full md:w-1/3 md:pr-8 mb-8 md:mb-0">
        <ContactInfo :contacts="cvData.contacts" />
        <SkillsSection :skills="cvData.skills" />
      </aside>

      <!-- Main Content -->
      <main class="w-full md:w-2/3 md:pl-8">
        <SummarySection :summary="cvData.summary" />
      </main>
    </div>

    <!-- Experience Section -->
    <ExperienceSection :experience="cvData.experience" />

    <!-- Projects Section -->
    <ProjectsSection :projects="cvData.projects" />

    <!-- Education Section -->
    <EducationSection :education="cvData.education" />
  </div>
</template>

<script setup>
import { cvData } from "~/data.js";
</script>
