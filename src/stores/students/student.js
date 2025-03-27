import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { StudentsService } from "@/services";
import { useStorage } from "@vueuse/core";
useStorage

export const useStudentsStore = defineStore('students', () => {
    const state = useStorage('studentStorage', {
        students: [],
        student: {},
        connection: false,
        message: '',
        error: null,
        loading: false,
        open: false,
    })


    const open = computed(()=> state.value.open)
    const error = computed(() => state.value.error)
    const students = computed(() => state.value.students)
    const student = computed(() => state.value.student)
    const connection = computed(() => state.value.connection)
    const message = computed(() => state.value.message)
    const loading = computed(() => state.value.loading)

    async function CreateStudents(student){
        state.value.loading = true
        try{
            const response = await StudentsService.CreateStudents(student)
            state.value.students.push(response)
            return response
        }
        catch(error){
            state.value.error = error
            throw error
        }
        finally{
            state.value.loading = false
            state.value.connection = true
        }
    }   

    async function GetStudents() {
        state.value.loading = true
        try{
            state.value.students = await StudentsService.GetStudents()
        }
        catch(error){
            state.value.error = error
        }
        finally{
            state.value.loading = false
            state.value.connection = true
        }
    }

    async function GetStudent(student){
        state.value.loading = true
        try{
            state.value.student = await StudentsService.GetStudent(student)
        }
        catch(error){
            state.value.error = error
        }
        finally{
            state.value.loading = false
            state.value.connection = true
        }
    }

    async function UpdateStudents(student) {
        state.value.loading = true
        try{
            const studentUpdated = await StudentsService.UpdateStudents(student)
            const findStudentIndex = state.value.students.findIndex(p => p.id === student.id)
            state.value.students[findStudentIndex] = studentUpdated
        }
        catch(error){
            state.value.error = error
        }
        finally{
            state.value.loading = false
            state.value.connection = true
        }
    }

    async function DeleteStudents(student){
        state.value.loading = true
        try{
            const findStudentIndex = state.value.students.findIndex(p => p.id === student.id)
            state.value.students.splice(findStudentIndex, 1)
            await StudentsService.DeleteStudents(student)
        }
        catch(error){
            state.value.error = error
        }
        finally{
            state.value.loading = false
            state.value.connection = true
        }
    }   
   

    return {state, error, message, connection, loading, student, students, open, GetStudent, GetStudents, CreateStudents, UpdateStudents, DeleteStudents}
})