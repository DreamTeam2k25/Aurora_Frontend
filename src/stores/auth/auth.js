import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { AuthService } from "@/services";
import { computed } from "vue";


export const useAuthStore = defineStore('auth', ()=>{
    const state = useStorage('storage', {
        user: {},
        users: [],
        access: '',
        refresh: '',
        error: null,
        message: '',
        connection: false,
        loading: false,
    })
  
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
        state.value.user = user
        state.value.access = token.access
        state.value.refresh = token.refresh
        } catch (error) {
            state.value.error = error
            state.value.message = "Credenciais Inválidas!"
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

        try {

        const userCreated = await AuthService.CreateUser(user)
        state.value.user = userCreated
        } catch (error) {
            state.value.error = error;
            state.value.message = "Erro ao criar um usuário!"
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
       await AuthService.DeleteUser(user)
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

        state.value.users[index] = await AuthService.UpdateUser(user, index)
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
   

    return { error, user, state, access, refresh, connection, message, users, loading, Login, Logout, GetUser, CreateUser, UpdateUser, DeleteUser, GetUsers, AutoLogin }
})