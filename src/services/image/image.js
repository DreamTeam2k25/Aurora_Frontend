import api from "@/plugins/api";

class ImageService{
    async CreateImage(token, image){
        try{
            const response = await api.post('images/', image, {headers: {
                Authorization: `Bearer ${token}` 
            }})

            return response.data
        }
        catch(error){
            return error
        }
    }
}

export default new ImageService()