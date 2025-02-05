import { defineStore } from "pinia";
import { ImageService } from "@/services";
import { computed } from "vue";


export const useImageStore = defineStore('image', () => {
    const state = {
        image: {},
        message: '',
        loading: false,
        error: null,
        connection: false
    }

    const image = computed(() => state.image)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)
    const error = computed(() => state.error)
    const connection = computed(() => state.connection)

    async function ImageUpdate(token, image){
        state.loading = true
        try{
            state.image = await ImageService.CreateImage(token, image)
        }
        catch(error){
            state.error = error
            state.message = 'Arquivo Imcompátivel'
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    return { image, message, loading, error, connection, ImageUpdate }
})