import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGuruh = defineStore('guruh', () => {

    const guruh = ref([
        {
            id: 1,
            title: "Web designer",
            number: "Class VII A",
            image: 'https://picsum.photos/id/225/200/300'
        },
        {
            id: 2,
            title: "Web designer",
            number: "Class VII A",
            image: 'https://picsum.photos/id/225/200/300'
        },
        {
            id: 3,
            title: "Web designer",
            number: "Class VII A",
            image: 'https://picsum.photos/id/225/200/300'
        },
        {
            id: 4,
            title: "Web designer",
            number: "Class VII A",
            image: 'https://picsum.photos/id/225/200/300'
        },
        {
            id: 5,
            title: "Web designer",
            number: "Class VII A",
            image: 'https://picsum.photos/id/225/200/300'
        },
        
       
        
    ])

    const news = ref([
        {
            id: 1,
            author: "Allayev Timur",
            content: "some thing interesting..",
            time: "17:30",
            image: 'https://picsum.photos/id/125/200/300'
        },
        {
            id: 2,
            author: "Allayev Timur",
            content: "some thing interesting..",
            time: "17:30",
            image: 'https://picsum.photos/id/125/200/300'
        },
        {
            id: 3,
            author: "Allayev Timur",
            content: "some thing interesting..",
            time: "17:30",
            image: 'https://picsum.photos/id/125/200/300'
        },
        {
            id: 4,
            author: "Allayev Timur",
            content: "some thing interesting..",
            time: "17:30",
            image: 'https://picsum.photos/id/125/200/300'
        },
       
       
        
    ])
    
  const guruhList = computed(() => guruh.value)
  const newsList = computed(() => news.value)
 

  return { guruhList, newsList }
})
