import api from "@/plugins/api";

class guildMembersService {
    async GetGuildMembers(){
        try{
            const response = await api.get('guild_members/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetGuildMember(guildMember){
        try{
            const response = await api.get(`guild_members/${guildMember.id}`)

            return response.data
        }
        catch(error){
            return error
        }
    }
    async CreateGuildMember(student, office, guildMember){
        try{
            const response = await api.post(`students/${student.id}/${office.id}/`, guildMember)
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdateGuildMember(student, office, guildMember){
        try{
            const response = await api.patch(`students/${student.id}/${office.id}/`, guildMember)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeleteGuildMembers(student, office, guildMember){
        try{
            const response = await api.delete(`students/${student.id}/${office.id}/`, guildMember.id)
            
            return response.data
        }
        catch(error){
            return error
        }
    }

}

export default new guildMembersService()