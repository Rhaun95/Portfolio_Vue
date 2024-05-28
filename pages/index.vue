<template>
  <div class="dark:bg-black dark:text-gray-50">
    <html lang="de">
      <head>
        <title>Startpage</title>
        <!-- <description>abstract Infomations about me: profile, works and contact</description> -->
        <meta property="og:title" content="Soo_Portfolio"> 
        <meta property="og:url" content="http://localhost:3000/">
        <meta property="og:type" content="website">
        <meta property="og:image" content="@/assets/OG_Startpage.png"> 
        <meta property="og:description" content="Vue Project: own portfolio website">
      </head>
    </html>

    <Header/>

    <main class="flex flex-col ">
      <section class="flex justify-evenly items-center flex-col flex-grow h-screen">
        <!-- Introduction -->
        <div class="text-center mt-16">
          <h1 class="text-6xl font-semibold">SOOHYEON KIM</h1>
          <p class="text-lg mt-4">I am a java developer</p>
        </div>
        <div class="flex justify-center items-center flex-col ">
          <div class="pb-3 text-sm font-bold text-gray-600">SCROLL DOWN</div>
          <div class="flex justify-center items-center bg-black p-5 rounded-full w-7 h-7 text-white ">
            <font-awesome-icon :icon="['fas', 'arrow-down']" />
          </div>
      </div>
      </section>

      <section class="flex-grow h-screen">
        <SectionTitle title="About Me"/>

        <div class="flex flex-col justify-center items-center ">

            <div class="flex flex-row ml-7">
              
                <div class="mt-14 ">
                    <img src="../assets/Me.jpg" alt="myfoto" class="w-64 rounded-md"/>
                </div>
            
                <div class="flex flex-col mt-5 p-5" >
                    <div class="mt-3 ml-6 text-base">
                        I'm a Java Developer from Hamburg, Germany, passionate about server-side development. 
                        <br>I thrive on team collaboration, embrace new tech, and excel in problem-solving.
                        <br>Let's grow together!
                    </div>
                    
                    <div class="flex">
                        <Profilcard class="w-1/3 p-4" title="Frontend" 
                            languages="JavaScript, TypeScript, Vue, React, Flutter"/> 
                        <Profilcard class="w-1/3 p-4" title="Backend" 
                            languages="Java, Spring Boot, Docker, JPA, Mybatis"/>
                        <Profilcard class="w-1/3 p-4" title="Database" languages="MySQL, MariaDB, SQL"/>       
                    </div>
                </div>
            </div>
            
            <div class="mt-6 flex flex-col ">
                <div class="text-2xl font-bold text-gray-700 uppercase ">
                    Latest Project
                </div>
                <hr class=" my-4 border-gray-300">

                <div class="flex justify-around items-center">
                    <div class="  text-center font-bold px-2">
                        Mobile Box Task
                        <p class="text-sm font-normal ">App</p>
                    </div>
                    <div class="  text-gray-500 w-3/5">
                        IVIS(In-Vehicle Information System)-Display evaluation method "Box Task" used in a mobile environment
                    
                        <p class=" text-sm ">
                        Skills: Flutter, Node.js, Express, socket.io, JavaScript
                        </p>
                    </div>
                    <div class="pl-3">
                        <div class="">2023</div>
                        
                    </div>
                </div>
            </div>

        </div>

      </section>

      <section class="flex-grow h-screen">
        Contact 
        <div class="flex justify-center items-center h-full">
          <div class="w-1/2">
            <h1 class="text-6xl font-bold text-center">SOOHYEON KIM</h1>
            <p class="text-sm mt-4">I am a java developer based in Hamburg, Germany. I am passionate about creating beautiful and functional websites. I am currently looking for a new opportunity to work with a team of talented developers.</p>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'index',
  }
</script>

<style scoped>
  body {
    @apply bg-white text-black;
  }

  body.dark {
    @apply bg-black text-white;
  }
</style>