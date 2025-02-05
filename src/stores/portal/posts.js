import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { PostsService } from "@/services";

export const usePostStore = defineStore('posts', () => {
    const state = reactive({
        posts: [],
        post: {},
        post_image: {},
        post_images: [],
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const posts = computed(() => state.posts)
    const post = computed(() => state.post)
    const post_image = computed(()=> state.post_image)
    const post_images = computed(()=> state.post_images)
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

    //////

    async function CreatePostsImages(postImages){
        state.loading = true
        try{
            state.post_images = await PostsService.CreatePostsImages(postImages)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetPostsImages() {
        state.loading = true
        try{
            state.post_images = await PostsService.GetPostsImages()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetPostImage(postImage){
        state.loading = true
        try{
            state.post_image = await PostsService.GetPostImage(postImage)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdatePostsImages(postImage) {
        state.loading = true
        try{
            const PostUpdated = await PostsService.UpdatePostsImages(postImage)
            const findPostIndex = state.posts.findIndex(p => p.id === post.id)
            state.post_images[findPostIndex] = PostUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeletePostsImages(postImages){
        state.loading = true
        try{
            const findPostIndex = state.posts.findIndex(p => p.id === postImages.id)
            state.post_images.splice(findPostIndex, 1)
            await PostsService.DeletePostsImages(postImages)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    return {error, message, connection, loading, posts, post, post_image, post_images, GetPosts, GetPost, CreatePosts, UpdatePosts, DeletePosts, GetPostImage, GetPostsImages, CreatePostsImages, UpdatePostsImages, DeletePostsImages}
})