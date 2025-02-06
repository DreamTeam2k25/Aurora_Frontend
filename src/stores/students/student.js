import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { StudentsService } from "@/services";

export const useStudentsStore = defineStore('students', () => {
    const state = reactive({
        students: [],
        student: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const students = computed(() => state.students)
    const student = computed(() => state.student)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreateStudents(student){
        state.loading = true
        try{
            state.students = await StudentsService.CreateStudents(student)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetStudents() {
        state.loading = true
        try{
            state.students = await StudentsService.GetStudents()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetStudent(student){
        state.loading = true
        try{
            state.student = await StudentsService.GetStudent(student)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdateStudents(student) {
        state.loading = true
        try{
            const studentUpdated = await StudentsService.UpdateStudents(student)
            const findStudentIndex = state.students.findIndex(p => p.id === student.id)
            state.students[findStudentIndex] = studentUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeleteStudents(student){
        state.loading = true
        try{
            const findStudentIndex = state.students.findIndex(p => p.id === student.id)
            state.students.splice(findStudentIndex, 1)
            await StudentsService.DeleteStudents(student)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   
   

    return {error, message, connection, loading, student, students, GetStudent, GetStudents, CreateStudents, UpdateStudents, DeleteStudents}
})