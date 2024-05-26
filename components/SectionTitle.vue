<template>
    <div>
        <div class=" flex justify-center items-center text-6xl font-bold mt-14 mb-16">
                {{ title }}
        </div>

    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
    });


</script>
