import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { OmbdusmanService } from "@/services";

export const useOmbdusmanStore = defineStore('ombdusman', () => {
    const state = reactive({
        ombdusman: [],
        connection: false,
        message: '',
        count: null,
        error: null,
        loading: false,
        count: null,
    })

    const ombdusman = computed(() => {return state.ombdusman})
    const connection = computed(() => {return state.connection})
    const message = computed(() => {return state.message})
    const error = computed(() => {return state.error})
    const loading = computed(() => {return state.loading})
    const count = computed(() => {return state.count})

    const CreateOmbudsman = async (description) => {
        state.loading = true
        console.log(description)
        try{
            const Ombdusman = await OmbdusmanService.Create(description)
            state.ombdusman.push(Ombdusman)
            console.log(Ombdusman)
            
        }
        catch(err){
            state.error = err
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    const GetOmbdusman = async (page) =>{
        state.loading = true
        try{
            const Ombdusman = await OmbdusmanService.Get(page)
            state.ombdusman = Ombdusman.results
            state.count = Ombdusman.count

        }
        catch(err){
            state.error = err
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    return {state, ombdusman, connection, loading, error, message, count, GetOmbdusman, CreateOmbudsman}
})
