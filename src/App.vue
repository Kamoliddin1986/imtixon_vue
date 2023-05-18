<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'


onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <header>
      
  <RouterView />
  </header>



</template>

<style scoped>

</style>
