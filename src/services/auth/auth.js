import api from "@/plugins/api"

class AuthService {
    async GetToken(user) {
        try {
            const response = await api.post('token/', user)
            return response.data
        } catch (error) {
            console.log(error)
            return error.request;
        }
    }

    async GetUsers() {
        try {
            const response = await api.get('users/')
            return response.data
        } catch (error) {
            return error;
        }
    }

    async CreateUser(user) {
        try {
            const response = await api.post('users/', user)
            return response.data
        } catch (error) {
            console.log(error)
            return error.request;
        }
    }

    async GetUser(token) {
        try {
        const response = await api.get('users/me/', {headers: {'authorization': `Bearer ${token}`}})
        return response.data
    } catch (error) {
        return error;
    }
    }

    async UpdateUser(user) {
        try {
        const response = await api.put(`users/${user.id}/`, user)
        return response.data
    } catch (error) {
        console.log(error)
        return error;
    }
    }

    async DeleteUser(id) {
        try {
        const response = await api.delete(`users/${id}/`)
        return response.data
    } catch (error) {
        return error;
    }
    }
}

export default new AuthService()