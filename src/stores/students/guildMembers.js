import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { GuildMembersService } from "@/services";

export const useGuildMembersStore = defineStore('guildMembers', () => {
    const state = reactive({
        guildMembers: [],
        guildMember: {},
        connection: false,
        message: '',
        error: null,
        loading: false
    })


    const error = computed(() => state.error)
    const guildMembers = computed(() => state.guildMembers)
    const guildMember = computed(() => state.guildMember)
    const connection = computed(() => state.connection)
    const message = computed(() => state.message)
    const loading = computed(() => state.loading)

    async function CreateGuildMember(student, office, guildMember){
        state.loading = true
        try{
            state.guildMembers = await GuildMembersService.CreateGuildMember(student, office, guildMember)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   

    async function GetGuildMembers() {
        state.loading = true
        try{
            state.guildMembers = await GuildMembersService.GetGuildMembers()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function GetGuildMember(guildMember){
        state.loading = true
        try{
            state.guildMember = await GuildMembersService.GetGuildMember(guildMember)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function UpdateGuildMembers(student, office, guildMember) {
        state.loading = true
        try{
            const guildMemberUpdated = await GuildMembersService.UpdateGuildMember(student, office, guildMember)
            const findGuildMemberIndex = state.guildMembers.findIndex(p => p.id === student.id)
            state.guildMembers[findGuildMemberIndex] = guildMemberUpdated
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }

    async function DeleteGuildMembers(student){
        state.loading = true
        try{
            const findGuildMembersIndex = state.guildMembers.findIndex(p => p.id === student.id)
            state.guildMembers.splice(findGuildMembersIndex, 1)
            await GuildMembersService.DeleteGuildMembers(student)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
            state.connection = true
        }
    }   
   

    return {error, message, connection, loading, guildMembers, guildMember, CreateGuildMember, GetGuildMember, GetGuildMembers, UpdateGuildMembers, DeleteGuildMembers} 
})