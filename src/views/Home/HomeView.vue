<template >
    <div class="flex h-[100vh] ">
        <div class="w-[77%] h-[100vh] bg-[#F3F4FF] py-6 px-8 " >
            <div class="flex justify-between items-center">
                <Title title="Dashbord"/>
                <Search/>
            </div>
            <div class="bg-white rounded-xl h-[130px] mt-6 flex justify-around items-center">
                <div class="flex  justify-center items-center">
                    <img src="../../assets/icons/students.svg" class="h-[50px]  mr-4" alt="">
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-[#A098AE] text-[15px]">O'quvchilar</p>
                        <p class="text-[#4D44B5] font-bold text-[25px]">{{ studentStore.studentList.length }}</p>
                    </div>
                </div>
                <div class="flex h-[81px] justify-center items-center">
                    <img src="../../assets/icons/teachers.svg"  class="h-[50px]  mr-4" alt="">
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-[#A098AE] text-[15px]">O'qituvchilar</p>
                        <p class="text-[#4D44B5] font-bold text-[25px]">{{ teacherStore.teacherList.length }}</p>
                    </div>
                </div>
                <div class="flex h-[81px] justify-center items-center">
                    <img src="../../assets/icons/groups.svg" class="h-[50px]  mr-4" alt="">
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-[#A098AE] text-[15px]">Guruhlar</p>
                        <p class="text-[#4D44B5] font-bold text-[25px]">40</p>
                    </div>
                </div>
                <div class="flex h-[81px] justify-center items-center">
                    <img src="../../assets/icons/subjects.svg" class="h-[50px] mr-4" alt="">
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-[#A098AE] text-[15px]">Fanlar</p>
                        <p class="text-[#4D44B5] font-bold text-[25px]">16</p>
                    </div>
                </div>
               
            </div>

            <div class="bg-white rounded-xl mt-8 flex flex-col relative p-4 px-6 h-[430px]">
                <h3 class="text-[#303972] text-[18px] font-[700] mb-5">O'qituvchilar:</h3>
                <ul class="w-full">
                    <li v-for="teacher in list" :key="teacher.id" class="flex justify-between items-center my-4">
                       <img class="rounded-full w-[32px] h-[32px]"  src="https://picsum.photos/id/122/200/300" alt=""> 
                       <p class="text-[#303972] text-[13px] font-[600] w-[30%]">{{ teacher.fullname }}</p>
                       <p class="text-[#4D44B5] text-[13px] font-[600] w-[10%]">ID {{ teacher.id }}</p>
                       <div class="flex justify-between items-center w-[12%]">
                            <img src="../../assets/icons/class.svg" class="h-[35px]" alt="">
                            <div class="ml-2">
                                <p class="text-[#4D44B5] text-[13px]">Class</p>
                                <p class="text-[#4D44B5] text-[13px] font-[600]">{{ teacher.class }}</p>
                            </div>
                       </div>
                       <p class="text-[#303972] text-[13px] font-[600] w-[10%]">{{ teacher.hours }} soat</p>
                       <img src="../../assets/icons/action.svg" alt="">
                    </li>
                </ul>
                <div class="absolute bottom-0 w-[90%]">
                    <nav class="flex justify-between md:items-center  md:space-y-0 p-4 " aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span class=" text-gray-900 dark:text-white">{{ teacherStore.teacherList.length }}</span>
                            tadan
                            <span class=" text-gray-900 dark:text-white">{{(pagination.current_page-1)*pagination.limit+1}}-{{ ((pagination.current_page-1)*pagination.limit)+list.length}}</span>
                        </span> 

                        <div class="flex text-gray-400">
                            <button @click="decrement" :disabled="pagination.prev" class="flex items-center justify-center h-full py-1 px-1 ml-0 text-gray-500 bg-white rounded-l-lg"><img src="../../assets/icons/arrow_left.svg" alt=""></button> 
                                
                                <p v-for="el in pagination.total_page" :key="el" @click="changePage(el)" class="border border-gray-500 w-[30px] h-[30px] rounded-full text-center pt-[3px] ml-1" :class="(pagination.current_page === el) ? 'bg-blue-700 text-white' : ''"> 
                                {{ el }}
                                </p>
                                
                            <button @click="increment" :disabled="pagination.next" class="flex items-center justify-center h-full py-1.5 px-1 ml-0 text-gray-500 bg-white rounded-l-lg"><img src="../../assets/icons/arrow_right.svg" alt=""></button> 
                        </div>
                    
                    </nav>
                </div>
                
            </div>

        </div>

        <!-- Left side -->
        <div class="w-[23%] h-[100vh] py-4 px-8 flex flex-col justify-start">
            <User/>
            <div class="my-5">
                <div class="flex justify-between items-center">
                    <p class="text-[#4D44B5] font-bold">Guruhlar</p>
                    <i class='bx bxs-plus-circle text-[25px] text-[#4D44B5]'></i>
                </div>
            </div>
            <Guruh v-for="el in guruhStore.guruhList" :key="el.id" :guruh="el"></Guruh>
            <button class="bg-[#4D44B51A] text-[#4D44B5] px-10 py-2 rounded-full ">Barchasi</button>

            <div class="my-5">
                <div class="flex justify-between items-center">
                    <p class="text-[#4D44B5] font-bold">Xabarlar</p>
                </div>
            </div>
            <News v-for="el in guruhStore.newsList" :key="el.id" :news="el"></News>
            <button class="bg-[#4D44B51A] text-[#4D44B5] px-10 py-2 rounded-full ">Barchasi</button>

        </div>
        <div>
        
        </div>
    </div>
</template>
<script setup>
    import Title from '../../components/Title/Title.vue';
    import Search from '../../components/Search/Search.vue';
    import {useTeacher} from '../../stores/teachers/teacherStore'
    import {useStudent} from '../../stores/students/studentStore'
    import User from '../../components/User/User.vue'
    import {reactive, onMounted, computed} from 'vue'
    import Guruh from '../../components/Guruh/Guruh.vue';
    import { useGuruh } from '../../stores/guruh/guruhStore';
    import News from '../../components/News/News.vue';

    const teacherStore = useTeacher()
    const studentStore = useStudent()
    const guruhStore = useGuruh();


    const pagination = reactive({
    current_page: 1,
    total_page: 1,
    limit: 5,
    prev: false,
    next: false
    })

    const increment =() =>{
    pagination.current_page=pagination.current_page + 1;
    }

    const decrement =() =>{
    
    pagination.current_page=pagination.current_page - 1;
    }

    const list = computed(()=>{
        let skip = (pagination.current_page-1)*pagination.limit
        if(pagination.current_page == pagination.total_page){
            pagination.next = true;
        }
        else{
            pagination.next = false;
        }
        if(pagination.current_page == 1){
            pagination.prev = true;
        }
        else{
            pagination.prev = false;
        }
        return teacherStore.teacherList.slice(skip, skip+pagination.limit);

    })

    const changePage = (number)=>{
    pagination.current_page = number
    }

    onMounted(() => {
        pagination.total_page = Math.ceil(teacherStore.teacherList.length/pagination.limit)
    })
</script>
<style >
    
</style>