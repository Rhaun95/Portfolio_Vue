<!-- components/content/Card.vue -->
<template>
    <div>
        
    <div class="flex justify-center mt-[130px] w-full">
        <div class="flex flex-col ">
            <div class="flex ">
                <div  class="uppercase text-3xl dark:text-gray-400">{{projectName}}</div>
                <Like :likes="likes" @like="handleLike" />
            </div>

            <div  class=" w-[600px] mr-10 dark:text-gray-500">
                08.2022-09.2022 <br><br>
                Targeting the post-2022 solo moviegoer boom,
                our platform enhances movie bookings with spontaneous meetup features,
                fostering connections among solo movie enthusiasts. This initiative seeks to 
                boost movie sales by creating a social and engaging environment for individual viewers. 
                <br><br>
                programming languages: Java, Javascript, SQL, Python
                <br>
                Frameworks:  Spring4(JWT/Security), MyBatis, JPA, Spring Boot, React
                <br>
                Web Technologies: HTML5, CSS3
            </div>
            <button class="w-24  mt-9 text-xl px-3 py-1 border border-gray-500
            hover:scale-105 hover:border-gray-300"
             @click="moveToRepo">Github</button>

        </div>

        <div class=" ml-10">
            <img src="/img/manna_profil.png" class="w-[450px] h-[300px] rounded-sm">
        </div>

            </div>
        </div>
  </template>

<script setup lang="ts" >
import { ref, onMounted } from 'vue';  
import {useRoute} from 'vue-router';

   const route = useRoute();
   const projectName = ref('');
   const likes = ref(0);
   
   //first action by loading
   onMounted(async() => {
       projectName.value = route.params.project;
       await getLike();
   });

   async function getLike() {
       try{
           const currentLike = await $fetch('/api/like/' + projectName.value);
           likes.value = currentLike.data;

       } catch (error) {
           alert(error);
       }
   }

   // Handle like increment
   const handleLike = async () => {
       try {
           await $fetch('/api/like/' + projectName.value, {
               method: 'PUT'
           });
           await getLike(); // Update like count after increment
       } catch (error) {
           console.error('Error updating like:', error);
       }
   }

   const moveToRepo = () => {
    // code here
    window.open(`https://github.com/Rhaun95/${projectName.value}` , '_blank')
  }
</script> 