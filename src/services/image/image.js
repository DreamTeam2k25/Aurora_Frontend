import api from "@/plugins/api";

class ImageService{
    async CreateImage(image){
        try{
            const response = await api.post('images/', {file: image}, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })

            return response.data
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async GetImages(){
        try{
            const response = await api.get('images/')

            return response.data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
}

export default new ImageService()