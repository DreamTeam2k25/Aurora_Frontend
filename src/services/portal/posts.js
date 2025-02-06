import api from "@/plugins/api";

class PostsService{
    async GetPosts(){
        try{
            const response = await api.get('posts/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetPost(post){
        try{
            const response = await api.get(`posts/${post.id}`)

            return response.data
        }
        catch(error){
            return error
        }
    }
    async CreatePosts(post){
        try{
            const response = await api.post('posts/', post)
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdatePosts(post){
        try{
            const response = await api.patch(`posts/${post.id}`, post)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeletePosts(post){
        try{
            const response = await api.delete(`posts/${post.id}`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }

    //////////

    async GetPostsImages(){
        try{
            const response = await api.get('post-images/')

            return response.data
        }
        catch(error){
            return error
        }
    }
    async GetPostImage(postImage){
        try{
            const response = await api.get(`post-images/${postImage.id}/`)

            return response.data
        }
        catch(error){
            console.log(error)

            return error
        }
    }
    async CreatePostsImages(postImage){
        try{
            const response = await api.post('post-images/', postImage)
            return response.data
        }
        catch(error){
            return error
        }
    }
    async UpdatePostsImages(postImage){
        try{
            const response = await api.patch(`post-images/${postImage.id}`, postImage)
            return response.data
        }   
        catch(error){
            return error
        }
    }
    async DeletePostsImages(postImage){
        try{
            const response = await api.delete(`post-images/${postImage.id}`)
            
            return response.data
        }
        catch(error){
            return error
        }
    }
    
}

export default new PostsService()