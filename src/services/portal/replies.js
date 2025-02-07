import api from "@/plugins/api";

class RepliesService{

    async GetReplies(){
        try{
            const response = await api.get('replies/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetReplie(replie){
        try{
            const response = await api.get(`replies/${replie.id}`)

            return response.data
        }
        catch(error){
            return error
        }
    }
    async CreateReplies(replie){
        try{
            const response = await api.post('replies/', replie)
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdateReplies(replie){
        try{
            const response = await api.patch(`replies/${replie.id}`, replie)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeleteReplies(replie){
        try{
            const response = await api.delete(`replies/${replie.id}`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }
 
    
}

export default new RepliesService()