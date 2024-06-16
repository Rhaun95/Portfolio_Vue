<template>
    <div class="dark:bg-black dark:text-gray-50" >
        <!-- <NuxtContent :document="project"/> -->
        <!-- <h1>{{ project.title }}</h1>  -->
        <Header/>
        <div class="flex justify-center items-center">
            <SectionTitle :title="projectName" class="uppercase"/>
            <Like :likes="likes" @like="handleLike" />
<!-- 
            <UIcon name = "i-ph-thumbs-up-bold" dynamic  @click="handleLike" class="w-8 h-8 cursor-pointer ml-5"/>
            <span>{{ likes.data }}</span> -->

        </div>

        <div class="flex flex-col justify-center items-center">

            <div class="flex justify-center ">
                <ContentDoc />
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

</script> 

