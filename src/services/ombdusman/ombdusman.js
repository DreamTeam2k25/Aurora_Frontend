import api from "@/plugins/api"

class OmbdusmanService{
    async Create(description){
        const {data} = await api.post('/ombdusman', description)
        return data
    }
    async Get(){
        const { data } = await api.get("/ombdusman")
        return data
    }
}

export default new OmbdusmanService()