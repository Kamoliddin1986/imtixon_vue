<template>
    <div class="flex justify-start items-center mb-3">
        <img :src="guruh.image" class="w-[40px] h-[40px] rounded-full mr-2" alt="">
        <div class="mr-10">
            <p class="text-[12px] font-[500]">{{ guruh.title }}</p>
            <p class="text-[12px] text-gray-400">{{ guruh.number }}</p>
        </div>
        <span class="text-[21px] border border-gray-500 text-gray-500 rounded-full w-[35px] h-[35px] text-center pt-[2px] hover:bg-blue-600 hover:text-white"><i class='bx bx-envelope'></i></span>
    </div>
</template>
<script setup>
    const props = defineProps(['guruh'])
</script>
<style>
    
</style>