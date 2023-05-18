<template>
    <div class="flex w-[160px] justify-between items-center bg-transparent">
        <img class="w-[45px] h-[45px] rounded-full" src="https://picsum.photos/id/11/200/300" alt="">
        <div class="">
            <p class="text-[12px] text-left text-black font-bold">{{ student.fullname }}</p>
            <p class="text-[10px] text-gray-700 text-left">{{ student.email }}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['student'])
</script>
<style >
    
</style>