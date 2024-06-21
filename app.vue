<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
    
</template>





<script setup lang="ts">
import { onMounted } from 'vue'

  onMounted(() => {
    document.documentElement.classList.add('dark')
  })
</script>