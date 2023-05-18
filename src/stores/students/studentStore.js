import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudent = defineStore('student', () => {

    const student = ref([
        {
            id: 1,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 2,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 3,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 4,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 5,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 6,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 7,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'

        },
        {
            id: 8,
            fullname: "Jahon Umarov",
            group: "1",
            stage: 'Freelance',
            createdAt: '18-05-2023',
            email: 'Jahon Umarovgmail.com',
            birth_date: "25-05-2023",
            password: 'password'
        }
        
    ])
    
  const studentList = computed(() => student.value)
    
  const CREATE = (studentt)=>{
    student.value.push(studentt)
  }

  const UPDATE = (id, newStud) => {
      for(let i of student.value){
        if(i.id == id){
            i.fullname = newStud.fullname;
            i.group = newStud.group;
            i.birth_date = newStud.birth_date,
            i.password = newStud.password,
            i.email = newStud.email
        }
    }
  }

  const DELETE = (id) => {
    for(let i in student.value){
        if(student.value[i].id == id){
            student.value.splice(i,1)
  }
}}

  return { studentList , CREATE, UPDATE,DELETE }
})
