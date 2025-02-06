<script setup>
import  { onMounted, reactive, ref } from 'vue'
import { useAuthStore, useImageStore, usePostStore } from "@/stores/index";
const postStore = usePostStore()

onMounted(async()=> {
  await postStore.GetPosts()
  await postStore.GetPostImage(postStore.posts[0])
  console.log(postStore.post_image)
})
const authStore = useAuthStore()
const imageStore = useImageStore()
// const img = ref(null)
// const saveimg = ref(null)

// onMounted(async()=>{
//   await imageStore.GetImages()
//   console.log(imageStore.images)
// })

// async function handleFileUpload(e) {
//   const target = e.target
//   if (target && target.files) {
//     const file = target.files[0]
//     img.value = URL.createObjectURL(file)
//     saveimg.value = file
//   }
 
// }

// const createImage = async () => {
//   console.log('img:' + typeof img.value + 'E saveimg:' + typeof saveimg.value)

//   await imageStore.CreateImage(saveimg.value)
// }


</script>
<template>
    <main>
      <h1 class=" text-amber-800">Users</h1>
      <ul>
        <li @click="fillInfo(user)" v-for="user in authStore.users">{{ user.name }}</li>
      </ul>

      <h1 class=" text-amber-800">Images</h1>
      <ul>
        <li @click="fillInfo(image)" v-for="image in imageStore.images">{{ typeof image }}</li>
      </ul>

      <h1 class=" text-amber-800">Posts</h1>
      <ul>
        <li @click="fillInfo(post)" v-for="post in postStore.posts">
          <img src="" alt="">
        </li>
      </ul>
      
      <h1>LOGIN</h1>
      
      <!-- <input v-model="user.username" type="text" placeholder="username">
      <input v-model="user.name" type="text" placeholder="name">
      <input v-model="user.email" type="text" placeholder="email">
      <input v-model="user.password" type="text" placeholder="password">
      <button @click="login(user)" class=" border-2 px-3 py-2 ">LOGIN</button>
      <button @click="erase(user)" class=" border-2 px-3 py-2 ">EXCLUIR</button> -->
      <input type="file" placeholder="SELECIONE" @change="handleFileUpload" >
      <button @click="createImage()" class=" border-2 px-3 py-2 ">Upload</button>
      <p>{{ saveimg }}</p>
    </main>
  </template>
  