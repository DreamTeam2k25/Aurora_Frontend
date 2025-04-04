import api from "@/plugins/api";

class StudentsService {
    async GetStudents(){
        try{
            const response = await api.get('students/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetStudent(student){
        try{
            const response = await api.get(`students/${student.id}`)

            return response.data
        }
        catch(error){
            return error
        }
    }

    async GetStudentByUserId(id) {
        try {
            const response = await api.get(`students/?id=&matricula=&curso=&turma=&user=${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    }
    async CreateStudents(student){
        try{
            const response = await api.post('students/', student)
            return response.data
        }
        catch(error){
            throw error
        }
    }
    async UpdateStudents(student){
        try{
            const response = await api.patch(`students/${student.id}`, student)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeleteStudents(student){
        try{
            const response = await api.delete(`students/${student.id}`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }

}

export default new StudentsService()