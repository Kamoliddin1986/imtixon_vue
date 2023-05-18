import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeacher = defineStore('teacher', () => {

    const teacher = ref([
        {
            id: 1,
            fullname: "Asilbek Abdullayev",
            class: "VII A",
            hours: 24   
        },
        {
            id: 2,
            fullname: "Umarov Baxodir",
            class: "VII A",
            hours: 12
        },
        {
            id: 3,
            fullname: "Kayumov Rustam",
            class: "VII A",
            hours: 10
        },
        {
            id: 4,
            fullname: "Tursunov Utkir",
            class: "VII A",
            hours: 10
        },
        {
            id: 5,
            fullname: "Tursunov Laziz",
            class: "VII A",
            hours: 51
        },
        {
            id: 6,
            fullname: "Ibragimov Jaxon",
            class: "VII A",
            hours: 55
        }
    ])
  const teacherList = computed(() => teacher.value)
 

  return { teacherList }
})
