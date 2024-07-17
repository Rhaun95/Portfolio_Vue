<template>
    <div class="dark:bg-black dark:text-gray-50">
      <html lang="de">
        <head>
          <title>Projects</title>
          <!-- <description>list of projects</description> -->
          <meta property="og:title" content="Projectlist"> 
          <meta property="og:url" content="http://localhost:3000/work">
          <meta property="og:type" content="website">
          <meta property="og:image" content="@/assets/OG_Startpage.png"> 
          <meta property="og:description" content="Vue Project: own portfolio website">
        </head>
      </html>
      
      <Header/>
      <SectionTitle title="Projects"/>
      <div id="workListContainer" class="flex flex-col justify-center items-center mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24">
        <ContentList path="/work" v-slot="{ list }"> <!-- ContentList에서 리스트를 받아옵니다 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(work, index) in list" :key="work._path" class="p-4 cursor-pointer">
              <h2 class="text-xl font-bold mb-2">{{ work.title }}</h2>
              <div class="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                <img :src="work.img" :alt="work.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                <div @click="moveToDetail(work.href)" class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p class="text-white text-center px-4">{{ work.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
</template>

<script setup lang="ts">

  const router = useRouter()
  const moveToDetail = (projectName: String) => {
    // code here
    router.push(`/work/${projectName}`)
  }
</script>
