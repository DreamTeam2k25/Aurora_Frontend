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

    async function CreatePosts(post){
        state.loading = true
        try{
            state.post = await PostsService.CreatePosts(post)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetPosts() {
        state.loading = true
        try{
            state.posts = await PostsService.GetPosts()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetPost(post){
        state.loading = true
        try{
            state.post = await PostsService.GetPost(post)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdatePosts(post) {
        state.loading = true
        try{
            const PostUpdated = await PostsService.UpdatePosts(post)
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

    async function DeletePosts(post){
        state.loading = true
        try{
            const findPostIndex = state.posts.findIndex(p => p.id === post.id)
            state.posts.splice(findPostIndex, 1)
            await PostsService.DeletePosts(post)
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