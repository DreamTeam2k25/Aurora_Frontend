import api from "@/plugins/api";

class ImageService{
    async CreateImage(image){
        try{
            const response = await api.post('images/', image)

            return response.data
        }
        catch(error){
            return error
        }
    }
}

export default new ImageService()