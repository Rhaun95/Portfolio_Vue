<template>
    <div>
        <UIcon name = "i-ph-thumbs-up-bold" dynamic  @click="like" class="w-8 h-8 cursor-pointer ml-5"/>
        <span>{{ likes }}</span>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps<{
        likes: number;
    }>();

    const emit = defineEmits(['like']);
    // 좋아요 버튼 클릭 시 처리
    const like = () => {
        emit('like'); // 부모 컴포넌트로 이벤트 발송
    }
</script>