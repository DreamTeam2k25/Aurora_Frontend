<script setup>
import  { onMounted, reactive } from 'vue'
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore()

onMounted(async ()=>{
 await authStore.GetUsers()

 console.log(authStore.user)
})
const user = reactive({
  name: '',
  username: '',
  email: '',
  password: ''
})

const login = (user) => {
  authStore.Login(user)
}
</script>
<template>
    <main>
      <h1 class=" text-amber-800">Users</h1>
      <ul>
        <li  v-for="user in authStore.users">{{ user.name }}</li>
      </ul>
      
      <h1>LOGIN</h1>
      <input v-model="user.username" type="text" placeholder="username">
      <input v-model="user.name" type="text" placeholder="name">
      <input v-model="user.email" type="text" placeholder="email">
      <input v-model="user.password" type="text" placeholder="password">
      <button @click="login(user)" class=" border-2 px-3 py-2 ">LOGIN</button>

    </main>
  </template>
  