import api from "@/plugins/api";

class PostsService{
    async GetPosts(token){
        try{
            const response = await api.get('posts/', {headers: {
                Authorization: `Bearer ${token}`
            }})

            return response.data.results
        }
        catch(error){
            return error
        }
    }
    async CreatePosts(token, post){
        try{
            const response = await api.post('posts/', post, {headers: {
            Authorization: `Bearer ${token}`
        }})
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdatePosts(token, post){
        try{
            const response = await api.patch(`posts/${post.id}`, post, {headers: {
                Authorization: `Bearer ${token}`
            }})
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeletePosts(token, post){
        try{
            const response = await api.delete(`posts/${post.id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
            
            return response.data
        }
        catch(error){
            return error
        }
    }
}

export default new PostsService()