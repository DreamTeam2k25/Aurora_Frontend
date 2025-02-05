import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { ReactionsService } from "@/services";

export const useReactionsStore = defineStore('reactions', () => {
    const state = reactive({
        reactions: [],
        reaction: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const reactions = computed(() => state.reactions)
    const reaction = computed(() => state.reaction)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreateReactions(reaction){
        state.loading = true
        try{
            state.reaction = await ReactionsService.CreateReactions(reactions)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetReactions() {
        state.loading = true
        try{
            state.reactions = await ReactionsService.GetReactions()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

     async function UpdateReactions(reaction) {
            state.value.loading = true
            try {
            await GetReactions()
            
            const index = state.reactions.findIndex((s) => s.id == reaction.id)
    
            state.reactions[index] = await ReactionsService.UpdateReactions(reaction, index)
            } catch (error) {
                state.value.error = error
                state.value.message = "Erro ao editar Reação"
            } finally {
                state.value.loading = false
                state.value.connection = true
            }
        }

    async function DeleteReactions(id){
        state.loading = true
        try{
            const index = state.reactions.findIndex(s => s.id === id)
            state.reactions.splice(index, 1)
            await ReactionsService.DeleteReactions(id)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    return {error, message, connection, loading, reactions, reaction, GetReactions, CreateReactions, UpdateReactions, DeleteReactions}
})