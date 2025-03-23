import api from "@/plugins/api"

class OmbdusmanService{
    async Create(description){
        try {
        const {data} = await api.post('/ombdusman/', description)
        
        return data
        } catch (error) {
            console.log(error)
            return error
        }
    }
    async Get(page){
        const { data } = await api.get(`/ombdusman/?page=${page ? page : ''}`)
        return {results: data.results, count: data.count}
    }
}

export default new OmbdusmanService()