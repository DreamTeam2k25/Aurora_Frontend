import api from "@/plugins/api";

class ReactionsService{
    async GetReactions(){
        try{
            const response = await api.get('reactions/')

            return response.data
        }
        catch(error){
            return error
        }
    }
   
    async CreateReactions(reaction){
        try{
            const response = await api.post('reactions/', reaction)
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdateReactions(reaction){
        try{
            const response = await api.put(`reactions/${reaction.id}`, reaction)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeleteReactions(id){
        try{
            const response = await api.delete(`reactions/${id}/`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }
}

export default new ReactionsService()