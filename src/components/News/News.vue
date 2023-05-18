<template>
    <div class="flex justify-start items-center mb-1">
        <img :src="news.image" class="w-[40px] h-[40px] rounded-full mr-2" alt="">
        <div class="mr-10">
            <p class="text-[10px] font-[500]">{{ news.author }}</p>
            <p class="text-[10px] text-gray-400">{{ news.content }}</p>
        </div>
        <span class="text-[10px] font-normal">{{ news.time }}</span>
    </div>
</template>
<script setup>
    const props = defineProps(['news'])
</script>
<style>
    
</style>