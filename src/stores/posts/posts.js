import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { PostsService } from "@/services";

export const usePostStore = defineStore('posts', () => {
    const state = reactive({
        posts: [],
        post: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const posts = computed(() => state.posts)
    const post = computed(() => state.post)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreatePosts(token, post){
        state.loading = true
        try{
            state.post = await PostsService.CreatePosts(token, post)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetPosts(token) {
        state.loading = true
        try{
            state.posts = await PostsService.GetPosts(token)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetPost(token, post){
        state.loading = true
        try{
            state.post = await PostsService.GetPost(token, post)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdatePosts(token, post) {
        state.loading = true
        try{
            const PostUpdated = await PostsService.UpdatePosts(token, post)
            const findPostIndex = state.posts.findIndex(p => p.id === post.id)
            state.posts[findPostIndex] = PostUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeletePosts(token, post){
        state.loading = true
        try{
            const findPostIndex = state.posts.findIndex(p => p.id === post.id)
            state.posts.splice(findPostIndex, 1)
            await PostsService.DeletePosts(token, post)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    return {error, message, connection, loading, posts, post, GetPosts, GetPost, CreatePosts, UpdatePosts, DeletePosts}
})