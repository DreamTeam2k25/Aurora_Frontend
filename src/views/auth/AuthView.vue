<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import {
  useAuthStore,
  useImageStore,
  usePostStore,
  useRepliesOfRepliesStore,
  useCommentsStore,
} from '@/stores/index'
import { AuthMarketingText, AuthInput } from '@/components'

const firstEntrance = ref(0)

const isLogin = ref(true)
const delayedLogin = ref(isLogin.value)

watch(isLogin, (newValue) => {
  setTimeout(() => {
    delayedLogin.value = newValue
  }, 2000)
})
</script>
<template>
  <main class="max-h-dvh h-dvh relative flex overflow-hidden">
    <div class="flex absolute min-w-dvw">
      <AuthMarketingText :is-login="isLogin" :class="` z-50 ${firstEntrance == 0 ? 'bottom-[-35rem] left-[5rem]' : !isLogin ? 'bottom-[-33rem] right-[5rem] register' : 'bottom-[-35rem] left-[5rem] login'} `" />
      <div
        
        :class="`${firstEntrance == 0 ? 'wrapper' : !isLogin ? 'wrapper-animation-back' : 'wrapper-animation'} z-30`"
      >
       
        <div :class="`${firstEntrance == 0 ? 'wave' : !isLogin ? 'wave-animation-back' : 'wave-animation'}`"></div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <AuthInput
        :class="`z-50 absolute duration-300 ${delayedLogin ? ' right-[10%] ' : ' left-[10%] '} ${firstEntrance == 0 ? '' : !isLogin ? 'animations' : 'animations-back'}`"
        @change_auth="((isLogin = !isLogin), console.log(isLogin), firstEntrance++)"
      />
    </div>
    <!-- <css-doodle use="var(--rule)"></css-doodle> -->
  </main>
</template>

<style scoped>
css-doodle {
  --rule: (
    : doodle {@grid: 1x1; width: 100%; height: 100%; position: absolute; z-index: -1;}
      background: white; clip-path: ellipse(75% 50% at 25% center) ; background-color: #2b72c9;
  );
}

.animations {
  animation-name: animate;
  animation-iteration-count: 1;
  animation-duration: 2s;
}

.animations-back {
  animation-name: animate-back;
  animation-iteration-count: 1;
  animation-duration: 2s;
}

@keyframes animate {
  0% {
    right: 10%;
  }
  100% {
    right: 66%;
  }
}

@keyframes animate-back {
  0% {
    left: 10%;
  }
  100% {
    left: 66%;
  }
}

.login {
  animation: appear 2s 1;
}

.register {
  animation: appear-back 3s 1;
}

@keyframes appear {
  0% {
    opacity: 0.5;
    margin-left: 1000px;
  }
  25% {
    opacity: 0;
    margin-left: 0px;
  }
  50% {

    opacity: 0;
  }
  100% {
 
    opacity: 1;
  }
}

@keyframes appear-back {
  0% {
    opacity: 0.5;
    margin-right: 1000px;
  }
  25% {
    opacity: 0;
    margin-right: 0px;
  }
  50% {

    opacity: 0;
  }
  100% {
 
    opacity: 1;
  }
}
.wrapper {
  width: 3000px;
  height: 3000px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-image: linear-gradient(to top, #408add 100%, transparent 0%);
  overflow: hidden;
  position: absolute;
  left: 0%;
  top: 0%;
  transform: rotate(90deg);
  display: flex;

}

.wrapper-animation {

  width: 3000px;
  height: 3000px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-image: linear-gradient(to top, #408add 100%, transparent 0%);
  overflow: hidden;
  position: absolute;
  left: 0%;
  top: 0%;
  transform: rotate(90deg);
  display: flex;
}

.wrapper-animation-back {

  width: 3000px;
  height: 3000px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-image: linear-gradient(to top, #408add 100%, transparent 0%);
  overflow: hidden;
  position: absolute;
  right: 0%;
  top: 0%;
  transform: rotate(90deg);
  display: flex;
  animation: increase 3s 1;
}

@keyframes decrease {
  0% {
    width: 3000px;
    height: 3000px;
  }
  50% {
    width: 3000px;
    height: 3000px;
  }
  75% {
    left: 0%;
    top: 0%;
    width: 3000px;
    height: 3000px;
  }
  100% {
    left: 0%;
    top: 0%;
    width: 1000px;
    height: 1000px;
  }
}



.wave {
  width: 1000px;
  height: 1050px;
  position: absolute;
  bottom: 25%;
  left: 5%;
  transform: rotate(0deg);
  margin-left: -300px;
  margin-top: -500px;
  border-radius: 35%;
  background: rgb(255, 255, 255);
  animation: wave 15s infinite linear;
}

.wave-animation {
 width: 1000px;
  height: 1050px;
  position: absolute;
  top: 55%;
  left: 5%;
  transform: rotate(0deg);
  margin-left: -300px;
  margin-top: -500px;
  border-radius: 35%;
  background: rgb(255, 255, 255);
  animation: come-wave-back 2s 1, wave 15s infinite linear;

}

@keyframes come-wave {
  from {
    top:  7%;
    left: 10%;
  }
  to {
    top: 41.7%;
    left: 5%;
  }
}

@keyframes come-wave-back {

  from {
    top:  90%;
    left: 10%;
  }
  to {
    top: 55%;
    left: 5%;
  }
}


.wave-animation-back {
 width: 1000px;
  height: 1050px;
  position: absolute;
  bottom: 40%;
  left: 5%;
  transform: rotate(0deg);
  margin-left: -300px;
  margin-top: -500px;
  border-radius: 35%;
  background: rgb(255, 255, 255);
  animation: come-wave 2.5s 1, wave 15s infinite linear;
}

@keyframes wave {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>
