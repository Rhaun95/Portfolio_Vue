<template>
    <div>
        <header>
            <div class="flex justify-between items-center ">
                <div class=" w-64 flex justify-center  mt-1">
                    <div ref="threeContainer" class="three-container  "></div>
                </div>
          
                <ul class="flex w-64 mr-7">
                    <li class="mx-3 text-lg mt-3">
                    <NuxtLink to="/works">WORK</NuxtLink>
                    </li>
                    <li class="mx-3 text-lg mt-3">
                    <NuxtLink to="/">SOOHYEON</NuxtLink>
                    </li>
                    <li class="mx-3 text-lg mt-3">
                    <NuxtLink to="/contact">CONTACT</NuxtLink>
                    </li>      
                </ul>
     
                <div class="w-64 flex justify-center">
                    <button aria-label="Color Mode" class="text-sm mt-3 px-3 leading-none border rounded text-white border-white hover:border-transparent bg-teal-800"
                            @click="changeColor">
                        <ColorScheme placeholder="...">
                            <font-awesome-icon :icon="['fas', 'moon']" v-if="colorMode.value === 'dark'" class="text-xl  text-black"/>
                            <font-awesome-icon :icon="['fas', 'bolt-lightning']" v-else  class="text-xl"/>
                        </ColorScheme>
                    </button>

                    <div class="ml-3">
                        <UButton  class="mt-3  p-3 " v-if="loggedIn" @click="handleSignOut" icon="i-dashicons-admin-users" color="amber" size="lg" variant="solid"></UButton>
                        <UButton  class="mt-3 p-3 " v-else icon="i-dashicons-admin-generic"  @click="handleSignIn"  color="teal" variant="soft">Admin</UButton>
                    </div> 
                </div>
            </div>

        <hr class="w-full my-2 border-gray-300">
    </header>


    </div>
</template>

<script setup lang="ts">
    const { status, data,  signIn, signOut   } = useAuth();

    async function handleSignIn() {
    await signIn();
    }

    async function handleSignOut() {
    await signOut();
    }
    

    const loggedIn = computed(() => status.value === 'authenticated');

    const colorMode = useColorMode();

    if (typeof localStorage !== 'undefined') {
        const storedColorMode = localStorage.getItem('color-mode');
        if (storedColorMode) {
            colorMode.value = storedColorMode;
        }
    } 

    const changeColor = () => {
            colorMode.value = (colorMode.value === 'light' ? 'dark' : 'light')
            localStorage.setItem('color-mode', colorMode.value);
    }
import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMounted, ref } from 'vue';

    const threeContainer = ref<HTMLDivElement | null>(null);

    onMounted(() => {

    if (!threeContainer.value) return;

    // Scene, Camera, Renderer 설정
    const scene = new THREE.Scene();
  
    const camera = new THREE.PerspectiveCamera(
        35,
        threeContainer.value.clientWidth / threeContainer.value.clientHeight,
        0.1,
        100
        );
        camera.position.set(20, 15, 4);
        camera.lookAt(-1, 3, 0);

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true, 
     });
    renderer.setSize( threeContainer.value.clientWidth , threeContainer.value.clientHeight);
    threeContainer.value.appendChild(renderer.domElement);

    // 조명 추가
    const light = new THREE.AmbientLight(0xffffff, 1); // Ambient light
    scene.add(light);

 // GLTFLoader를 사용하여 3D 모델 로드
 const loader = new GLTFLoader();
  const assetPath = new URL('@/assets/coffee/scene.gltf', import.meta.url).href;
  loader.load(assetPath, (gltf) => {
    scene.add(gltf.scene);

        // 애니메이션 루프
        const animate = () => {
        requestAnimationFrame(animate);

        gltf.scene.rotation.y += 0.005;
        renderer.render(scene, camera);
        
        };
        animate();
    });
    camera.position.z = 4;

    
    });

    
</script>
<style scoped >

.three-container {
    width: 76px;
    height: 63px;

}
</style> 