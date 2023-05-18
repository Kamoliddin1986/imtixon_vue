<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '../components/Sidebar/Sidebar.vue';
</script>

<template>
    <main>
    <section id="main" class="w-full">
      <Sidebar/>
      <div class=" sm:ml-64">
        <div
          class=" border-gray-200 border-dashed rounded-lg dark:border-gray-700"
        >
        <RouterView/>
        </div>
      </div>
      <Sidebar/>
    </section>
  </main>
</template>

<style scoped>
    
</style>