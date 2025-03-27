import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { AuthService } from "@/services";
import { computed, ref } from "vue";


export const useAuthStore = defineStore('auth', ()=>{
    const state = useStorage('storage', {
        user: {
            id: null,
            name: '',
            email: '',
            password: '',
        },
        users: [],
        access: '',
        refresh: '',
        error: null,
        message: '',
        connection: false,
        loading: false,
        
    })

    const methodByLink = ref(true)
  
    const error = computed(() => state.value.error)
    const access = computed(() => state.value.access)
    const refresh = computed(() => state.value.refresh)
    const user = computed(()=> state.value.user)
    const connection = computed(()=> state.value.connection)
    const loading = computed(()=> state.value.loading)
    const message  = computed(()=> state.value.message)
    const users = computed(()=> state.value.users)
    
    async function Login(user){
        state.value.loading = true

        try {
        const token = await AuthService.GetToken(user)
        state.value.user = {password: user.password, id: token.user_id, name: token.name, email: user.email}

        console.log(state.value.user)
        state.value.access = token.access
        state.value.refresh = token.refresh
        return token
        } catch (error) {
            state.value.error = error
            state.value.message = "Credenciais Inválidas!"
            throw error
        } finally {
        state.value.loading = false
        state.value.connection = true   
        }
    }

    async function GetUsers() {
        state.value.loading = true
        try {
        state.value.users = await AuthService.GetUsers()
        } catch (error) {
        state.value.error = error
       
        } finally {
            state.value.loading = false
            state.value.connection = true
        }
    }
        
    async function GetUser(token){
        state.value.loading = true

        try {
        const user = await AuthService.GetUser(token)
        state.value.user = user
        } catch (error) {
            state.value.error = error
            state.value.message = "Você ainda não iniciou a sessão!"
        } finally {
            state.value.loading = false
            state.value.connection = true
        }
    }

    async function CreateUser(user) {
        state.value.loading = true
        console.log(user)

        try {

        await AuthService.CreateUser(user)
    
        const response = await Login({email: user.email, password: user.password})

        return response
        } catch (error) {
            state.value.error = error;
            state.value.message = "Erro ao criar um usuário!"
            throw error
        } finally {
            state.value.loading = false
            state.value.connection = true
        }
    }

    async function DeleteUser(id) {
        state.value.loading = true
        try {

        
        await GetUsers()

       const user = state.value.users.findIndex((s) => s.id == id)

       state.value.users.splice(user, 1)
       await AuthService.DeleteUser(id)
        } catch (error) {
            state.value.error = error
            state.value.message = "Erro ao deletar usuário"
        } finally {
            state.value.loading = false
            state.value.connection = true
        }
    }


    async function UpdateUser(user) {
        state.value.loading = true
        try {
        await GetUsers()
        
        const index = state.value.users.findIndex((s) => s.id == user.id)

        state.value.users[index] = await AuthService.UpdateUser(user)
        } catch (error) {
            state.value.error = error
            state.value.message = "Erro ao editar usuário"
        } finally {
            state.value.loading = false
            state.value.connection = true
        }
    }

    async function Logout() {
        state.value.loading = true
        state.value.access = ''
        state.value.refresh = ''
        state.value.user = {}
        localStorage.clear()
        state.value.loading = false
        state.value.connection = true
    }

    async function AutoLogin() {
        state.value.loading = true
        state.value.access = localStorage.getItem('access')
        state.value.refresh = localStorage.getItem('refresh')
        state.value.user = GetUser(access.value)
        state.value.loading = false
        state.value.connection = true
    }
   

    return { error, user, state, access, refresh, connection, message, users, loading, methodByLink, Login, Logout, GetUser, CreateUser, UpdateUser, DeleteUser, GetUsers, AutoLogin }
})