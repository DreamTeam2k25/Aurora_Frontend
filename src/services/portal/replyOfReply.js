import api from "@/plugins/api";

class ReplyOfReplyService {

    async GetRepliesOfReplies(){
        try{
            const response = await api.get('replies_of_replies/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetReplyOfReply(replyOfReply){
        try{
            const response = await api.get(`replies_of_replies/${replyOfReply.id}`)

            return response.data
        }
        catch(error){
            return error
        }
    }
    async CreateRepliesOfReplies(replyOfReply){
        try{
            const response = await api.post('replies_of_replies/', replyOfReply)
            return response.data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async UpdateRepliesOfReplies(replyOfReply){
        try{
            const response = await api.patch(`replies_of_replies/${replyOfReply.id}`, replyOfReply)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeleteReplies(replyOfReply){
        try{
            const response = await api.delete(`replies_of_replies/${replyOfReply.id}`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }
 
    
}

export default new ReplyOfReplyService()