<template>
    <div >
        <header>
            <div class="flex justify-between items-center ">

                <div class="w-64"></div>
          
                <ul class="flex w-64">
                    <li class="mx-3 text-base mt-3">
                    <NuxtLink to="/work">WORK</NuxtLink>
                    </li>
                    <li class="mx-3 text-base mt-3">
                    <NuxtLink to="/">SOOHYEON</NuxtLink>
                    </li>
                    <li class="mx-3 text-base mt-3">
                    <NuxtLink to="/contact">CONTACT</NuxtLink>
                    </li>      
                </ul>
                <div class="w-64 ">
                    <button aria-label="Color Mode" class="text-sm mt-3 px-4 py-1 leading-none border rounded text-white border-white hover:border-transparent bg-teal-800 dark:bg-white"
                            @click="changeColor">
                        <ColorScheme placeholder="...">
                            <font-awesome-icon :icon="['fas', 'moon']" v-if="colorMode.value === 'dark'" class="text-xl  text-black"/>
                            <font-awesome-icon :icon="['fas', 'bolt-lightning']" v-else  class="text-xl"/>
                        </ColorScheme>
                    </button>
                </div>
            </div>

        <hr class="w-full my-4 border-gray-300">
    </header>


    </div>
</template>

<script setup lang="ts">

    const colorMode = useColorMode();

    if (typeof localStorage !== 'undefined') {
        const storedColorMode = localStorage.getItem('color-mode');
        if (storedColorMode) {
            colorMode.value = storedColorMode;
        }
    } else {
        console.log('Web Storage is not supported in this environment.');
    }

    const changeColor = () => {
            colorMode.value = (colorMode.value === 'light' ? 'dark' : 'light')
            localStorage.setItem('color-mode', colorMode.value);
    }

</script>