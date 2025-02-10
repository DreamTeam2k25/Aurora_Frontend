import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { ReplyOfReplyService  } from "@/services";

export const useRepliesOfRepliesStore = defineStore('repliesOfReplies', () => {
    const state = reactive({
        repliesOfReplies: [],
        repliesOfReplie: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const repliesOfReplies = computed(() => state.repliesOfReplies)
    const repliesOfReplie = computed(() => state.repliesOfReplie)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreateRepliesOfReplies(replie){
        state.loading = true
        try{
            state.repliesOfReplies = await ReplyOfReplyService.CreateRepliesOfReplies(replie)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetRepliesOfReplies() {
        state.loading = true
        try{
            state.repliesOfReplies = await ReplyOfReplyService.GetRepliesOfReplies()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetReplyOfReply(replie){
        state.loading = true
        try{
            state.repliesOfReplie = await ReplyOfReplyService.GetReplyOfReply(replie)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdateRepiesOfReplies(replie) {
        state.loading = true
        try{
            const replyUpdated = await ReplyOfReplyService.UpdateRepliesOfReplies(replie)
            const findReplyIndex = state.repliesOfReplies.findIndex(p => p.id === replie.id)
            state.repliesOfReplies[findReplyIndex] = replyUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeleteRepliesOfReplies(replie){
        state.loading = true
        try{
            const findReplyIndex = state.repliesOfReplies.findIndex(p => p.id === replie.id)
            state.repliesOfReplies.splice(findReplyIndex, 1)
            await ReplyOfReplyService.DeleteReplies(replie)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }      

    return {error, message, connection, loading, repliesOfReplie, repliesOfReplies, GetReplyOfReply, GetRepliesOfReplies, CreateRepliesOfReplies, UpdateRepiesOfReplies, DeleteRepliesOfReplies}
})