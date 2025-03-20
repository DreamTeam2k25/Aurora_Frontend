import { defineStore } from "pinia";
import { computed } from "vue";
import { OmbdusmanService } from "@/services";

export const useOmbdusmanStore = defineStore('ombdusman', () => {
    const state = {
        ombdusman: [],
        connection: false,
        message: '',
        error: null,
        loading: false
    }

    const ombdusman = computed(() => {return state.ombdusman})
    const connection = computed(() => {return state.connection})
    const message = computed(() => {return state.message})
    const error = computed(() => {return state.error})
    const loading = computed(() => {return state.loading})

    const CreateOmbudsman = async (description) => {
        state.loading = true
        try{
            const Ombdusman = await OmbdusmanService.Create(description)
            state.ombdusman.push(Ombdusman)
        }
        catch(err){
            state.error = err
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    const GetOmbdusman = async () =>{
        state.loading = true
        try{
            const Ombdusman = await OmbdusmanService.Get()
            state.ombdusman = Ombdusman
        }
        catch(err){
            state.error = err
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    return {ombdusman, connection, loading, error, message, GetOmbdusman, CreateOmbudsman}
})
