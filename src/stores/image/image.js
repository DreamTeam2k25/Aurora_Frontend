import { defineStore } from "pinia";
import { ImageService } from "@/services";
import { computed } from "vue";


export const useImageStore = defineStore('image', () => {
    const state = {
        image: {},
        images: [],
        message: '',
        loading: false,
        error: null,
        connection: false
    }

    const image = computed(() => state.image)
    const images = computed(()=> state.images)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)
    const error = computed(() => state.error)
    const connection = computed(() => state.connection)

    async function CreateImage(image){
        state.loading = true
        try{
            state.image = await ImageService.CreateImage(image)
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

    async function GetImages() {
        state.loading = true
        try {
            state.images = await ImageService.GetImages()
        } catch (error) {
            return error;
        } finally {
            state.loading = false
            state.connection = true
        }
    }

    return { image, images, message, loading, error, connection, CreateImage, GetImages }
})