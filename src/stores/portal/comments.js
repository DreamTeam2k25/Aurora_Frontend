import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { CommentsService } from "@/services";

export const useCommentsStore = defineStore('comments', () => {
    const state = reactive({
        comments: [],
        comment: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const comments = computed(() => state.comments)
    const comment = computed(() => state.comment)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreateComments(comment){
        state.loading = true
        try{
            state.comments = await CommentsService.CreateComments(comment)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetComments() {
        state.loading = true
        try{
            state.comments = await CommentsService.GetComments()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetComment(comment){
        state.loading = true
        try{
            state.comment = await CommentsService.GetComment(comment)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdateComments(comment) {
        state.loading = true
        try{
            const commentUpdated = await CommentsService.UpdateComments(comment)
            const findCommentIndex = state.comments.findIndex(p => p.id === comment.id)
            state.comments[findCommentIndex] = commentUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeleteComments(comment){
        state.loading = true
        try{
            const findCommentIndex = state.comments.findIndex(p => p.id === comment.id)
            state.comments.splice(findCommentIndex, 1)
            await CommentsService.DeleteComments(comment)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }      

    return {error, message, connection, loading, comment, comments, GetComment, GetComments, CreateComments, UpdateComments, DeleteComments}
})