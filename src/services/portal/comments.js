import api from "@/plugins/api";

class CommentsService{
    
    async GetComments(){
        try{
            const response = await api.get('comments/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetComment(comment){
        try{
            const response = await api.get(`comments/${comment.id}`)

            return response.data
        }
        catch(error){
            return error
        }
    }
    async CreateComments(comment){
        try{
            const response = await api.post('comments/', comment)
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdateComments(comment){
        try{
            const response = await api.patch(`comments/${comment.id}`, comment)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeleteComments(comment){
        try{
            const response = await api.delete(`comments/${comment.id}`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }
    
}

export default new CommentsService()