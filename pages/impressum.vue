<template>
    <div class="dark:bg-black dark:text-gray-50 h-screen">
        <html lang="de">
            <head>
                <title>Contactpage</title>
                <!-- <description>contact via email</description> -->
                <meta property="og:title" content="impressume"> 
                <meta property="og:url" content="http://localhost:3000/impressum">
                <meta property="og:type" content="website">
                <meta property="og:image" content="@/assets/OG_Startpage.png"> 
                <meta property="og:description" content="Vue Project: own portfolio website">
            </head>
        </html>
        <Header/>

        <div class=" flex flex-col items-start mt-12 mx-32  px-8">
            <h1 class="text-5xl mb-8  mt-12  font-bold" >IMPRESSUM</h1>

            <div class="text-left mb-6">
                <p class="text-2xl font-bold  mb-2">Soohyeon Kim</p>
                <p class="text-md text-gray-200">Laufgraben 18</p>
                <p class="text-md text-gray-200">20146 Hamburg</p>


                <h2 class="text-xl font-bold mb-4">Kontakt</h2>
                <div class="text-left mb-6">
                    <p class="text-md text-gray-200">Telefon: <a href="tel:+4915788086059" class="text-blue-600 hover:text-blue-800">+49 157 8808 6059</a></p>
                    <p class="text-md text-gray-200">E-Mail: <a href="mailto:soo.kim599@gmail.com" class="text-blue-600 hover:text-blue-800">soo.kim599@gmail.com</a></p>
                </div>

                <p class="text-sm text-gray-300">Quelle: <a href="https://www.e-recht24.de" class="text-blue-600 hover:text-blue-800">https://www.e-recht24.de</a></p>
            </div>
        </div>




    </div>
</template>

<script lang="ts">
    export default {
    name: 'impressume',
    // 컴포넌트 로직 및 데이터 설정
    }
</script>