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

      <div id="workListContainer" class="flex flex-col justify-center items-center"> 
        <ContentList path="/work" v-slot="{ list }" >
          <div class="grid grid-cols-2 gap-5">
            <div v-for="(work, index) in list" 
              :key="work._path" class="m-5 ">
              <h2>{{ work.title }}</h2>
              <p>{{ work.description }}</p>
              <img :src="work.img" :alt="work.title" class="w-[650px] h-[450px]  border border-gray-300 rounded-sm">
              <nuxt-link :to="'/work/' + work.href">Link</nuxt-link>
            </div>
          </div>
        </ContentList>
    
       </div>
      

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
