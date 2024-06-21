<template>
    <div @click="handleClick" class="flex flex-col justify-center text-center p-5 
                border-2 border-gray-400 rounded-lg m-3 
                cursor-pointer z-0 
                transform transition-transform duration-200 ease-in-out 
                hover:scale-105 hover:border-4 hover:border-red-300 dark:hover:border-lime-200 ">

            <p>{{ description }}</p>
            <hr class="w-full mb-2"/>
            <div class="text-lg">{{ name }}</div>
          <!-- <p><strong>Stars:</strong> {{ repo.stargazers.totalCount }}</p>
          <p><strong>Forks:</strong> {{ repo.forkCount }}</p> -->

    </div>

</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    name: String,
    description: String
})

const emit = defineEmits(['name', 'description']);


const handleClick = () => {
  // Emit custom event to notify parent component about the click
  emit('name')
  emit('description')
}
</script>