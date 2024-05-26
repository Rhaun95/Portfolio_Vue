<!-- components/ServiceCard.vue -->
<template>
    <div class="bg-white p-4 mt-7 mx-3 ">
      <div class="bg-slate-400 rounded-full w-8 h-8 mb-3">
      <!-- icon   -->
      </div>
      <div class="text-2xl font-bold mb-3 uppercase">{{ title }}</div>
      <div class="text-gray-600">
        <p v-for="language in languages.split(',')" :key="language" class="mb-1">
          {{ language.trim() }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    languages: String,
  });
  </script>
  