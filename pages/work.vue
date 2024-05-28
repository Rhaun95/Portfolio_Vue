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

      <SectionTitle title="Works"/>
        <div class="flex justify-center ">
          <div class=" grid grid-cols-2 gap-6 mb-10 ">
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
      
          </div>
        </div>
      
      <!-- <div class="flex justify-center relative overflow-x-auto sm:rounded-lg">
                        
        <table class=" text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <!-- <th scope="col" class="px-6 py-3">
                        Product name
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="text-lg px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        Mobile Box Task
                        <!-- <p class="text-sm text-center font-normal"></p> 
                    </th>
                    <td class="px-6 py-4">
                        
                        Realisierung einer Display-Evaluationsmethode „Box Task“ in einem mobilen Umfeld

                    </td>
                    <td class="px-6 py-4">
                        App
                    </td>
                    <td class="px-6 py-4">
                        2023
                    </td>

                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                  
                </tr>
            </tbody>
        </table>
      </div> -->
           

    </div>
</template>
