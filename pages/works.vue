<template>
    <div class="dark:bg-black dark:text-gray-50">
      <html lang="de">
        <head>
          <title>Works</title>
          <!-- <description>list of projects</description> -->
          <meta property="og:title" content="Projectlist"> 
          <meta property="og:url" content="http://localhost:3000/work">
          <meta property="og:type" content="website">
          <meta property="og:image" content="@/assets/OG_Startpage.png"> 
          <meta property="og:description" content="Vue Project: own portfolio website">
        </head>
      </html>
      
      <Header/>
      <SectionTitle title="Work"/>
      
      <ContentList path="/work" v-slot="{ list }">
        <div v-for="work in list" :key="work._path">
          <h2>{{ work.title }}</h2>
          <p>{{ work.description }}</p>
          <img :src="work.img" :alt="work.title" class="w-[550px] h-[400px]">
          <nuxt-link :to="'/work/' + work.href">Link</nuxt-link>
        </div>
      </ContentList>
  
    

       <!-- <div class="flex justify-center ">
          <div class="grid grid-cols-2 gap-6 mb-10 ">
            <div v-for="project in projects" :key="project.title">
              <nuxt-link :to="project.href">
                <img :src={{project.img}} :alt="project.title" class="w-[550px] h-[400px] bg-rose-300">
                <div class="text-lg font-bold mt-3">{{ project.title }}</div>
              </nuxt-link>
            </div>
          </div>
   
        </div>   -->

      
          <!-- <div class=" grid grid-cols-2 gap-6 mb-10 ">
            <div>
              <div class="w-[550px] h-[400px] bg-rose-300 ">1</div>
              <div class="text-lg font-bold mt-3">Portfolio: WEB</div>
            </div>
            <div>
              <div class="w-[550px] h-[400px] bg-rose-300 ">2</div>
              <div class="text-lg font-bold mt-3">MBT: APP</div>
            </div>

            <div>
              <div class="w-[550px] h-[400px] bg-rose-300 ">3</div>
              <div class="text-lg font-bold mt-3">SANTORINI: GAME</div>
            </div>
            <div>
              <div class="w-[550px] h-[400px] bg-rose-300 ">4</div>
              <div class="text-lg font-bold mt-3">MANNA: WEB</div>
            </div>
      
          </div> -->

    </div>
</template>

<script lang="ts">



// export default {
//   async asyncData({ $content }) {
//     const projects = await $content('projects').fetch()

//     return {
//       projects
//     }
//   }
// }
</script>
