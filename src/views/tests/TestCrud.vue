<script setup>
import  { onMounted, reactive, ref } from 'vue'
import { useAuthStore, useImageStore, usePostStore, useRepliesOfRepliesStore, useCommentsStore } from "@/stores/index";
import GlobalButton from '@/components/global/buttons/GlobalButton.vue';

const postStore = usePostStore()
const repliesOfRepliesStore = useRepliesOfRepliesStore()
const commentsStore = useCommentsStore()

onMounted(async()=> {
  await postStore.GetPosts()
  await postStore.GetPostImage(postStore.posts[0])
  await repliesOfRepliesStore.GetRepliesOfReplies()
  await commentsStore.GetComments()
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
const rep = reactive({
  user: '',
  comment_replie: '',
})

const fillCommentInfo = (comment) => {
  rep.comment_replie = comment.id
}

const fillInfo = (info) => {
  rep.user = info.id
}

const createReplieOfReplie = async (replier) => {
  console.log(replier)
  await repliesOfRepliesStore.CreateRepliesOfReplies(replier)
}

</script>
<template>
    <main>
      <h1 class=" text-amber-800">Users</h1>
      <ul>
        <li @click="fillInfo(user)" v-for="user in authStore.users">{{ user.name }}</li>
      </ul>

      <h1 class=" text-amber-800">Replies of Replies</h1>
      <ul>
        <li v-for="replyOfReplye in repliesOfRepliesStore.repliesOfReplies">{{ replyOfReplye.comment_replie.reply }}</li>
      </ul>

      <h1 class=" text-amber-800">Comment</h1>
      <ul>
        <li @click="fillCommentInfo(comment)" v-for="comment in commentsStore.comments">
          <p>{{ comment.comment }}</p>
        </li>
      </ul>
      
      <h1>LOGIN</h1>
      
      <input v-model="rep.comment_replie" type="text" placeholder="comment reply">
            
      <input v-model="rep.user" type="text" placeholder="user">

      <!-- <input type="file" placeholder="SELECIONE" @change="handleFileUpload" > -->
      <button @click="createReplieOfReplie(rep)" class=" border-2 px-3 py-2 ">CREATE REPLYOFREPLY</button>
      <p>{{ saveimg }}</p>

    <css-doodle use="var(--rule)"></css-doodle>

    <GlobalButton />
    </main>
  </template>

<style scoped>
css-doodle {
  --rule: (
    :doodle {
    @grid: 5 / 8em;
  }
  background: #60569e;
  transform: scale(@rand(.2, .9));
  );
}
</style>
  