import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { RepliesService } from "@/services";

export const useRepliesStore = defineStore('replies', () => {
    const state = reactive({
        replies: [],
        replie: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const replies = computed(() => state.replies)
    const replie = computed(() => state.replie)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreateReplies(replie){
        state.loading = true
        try{
            state.replies = await RepliesService.CreateReplies(replie)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetReplies() {
        state.loading = true
        try{
            state.replies = await RepliesService.GetReplies()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetReplie(replie){
        state.loading = true
        try{
            state.replie = await RepliesService.GetReplie(replie)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdateReplies(replie) {
        state.loading = true
        try{
            const replieUpdated = await RepliesService.UpdateReplies(replie)
            const findReplieIndex = state.replies.findIndex(p => p.id === replie.id)
            state.replies[findReplieIndex] = replieUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeleteReplies(replie){
        state.loading = true
        try{
            const findReplieIndex = state.replies.findIndex(p => p.id === replie.id)
            state.replies.splice(findReplieIndex, 1)
            await RepliesService.DeleteReplies(replie)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }      

    return {error, message, connection, loading, replie, replies, CreateReplies, UpdateReplies, DeleteReplies, GetReplie, GetReplies}
})