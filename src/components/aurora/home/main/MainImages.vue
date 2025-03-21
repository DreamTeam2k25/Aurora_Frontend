<template>
    <div class="relative w-full md:w-1/2 flex justify-center">
    <div class="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-blue-200 relative shake">
      <img 
        src="@/assets/images/dummy-foto-woman2.png"
        alt="Student" class="w-full h-full object-cover" 
      />
    </div>
  
    <div class="absolute -top-12 -left-6 z-10 md:left-120 w-58 h-58 rounded-full overflow-hidden bg-blue-500 shadow-lg border-4 border-white shake">
      <img 
      
        src="@/assets/images/dummy-foto-woman1.png"
        alt="Another student" class="w-full h-full object-cover" 
      />
    </div>
      <div class="absolute top-[-50px] left-100 w-6 h-6 bg-blue-400 rounded-full ball ball-1"></div>
      <div class="absolute top-50 right-40 w-4 h-4 bg-blue-500 rounded-full ball ball-2"></div>
      <div class="absolute bottom-10 left-60 w-10 h-10 bg-blue-600 rounded-full ball ball-3"></div>
      <div class="absolute bottom-0 right-50 w-7 h-7 bg-blue-700 rounded-full ball ball-4"></div>
    </div>
  </template>

<style scoped>
.ball-1 {
  animation: appear_1 0.8s ease-out forwards, shake 2s cubic-bezier(.36,.07,.19,.97) infinite;
}

.ball-2 {
  animation: appear_2 0.8s ease-out forwards;
}

.ball-3 {
  animation: appear_3 0.8s ease-out forwards;
}

.ball-4 {
  animation: appear_4 0.8s ease-out forwards;
}

.shake {
  animation: shake 2s cubic-bezier(.36,.07,.19,.97) infinite;
}

/* BALL 1 */
@keyframes appear_1 {
  0% {
    top: 250px;
    left: 400px;
    opacity: 0;
  }
  100% {
    top: -50px;
    left: 400px;
    opacity: 1;
  }
}


@keyframes shake {
  10%, 90% {
    transform: translate3d(0, -1px, 0);
  }
  
  20%, 80% {
    transform: translate3d(0, 2px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(0, 1px, 0);
  }

  40%, 60% {
    transform: translate3d(0, 1px, 0);
  }
}

/* BALL 2 */
@keyframes appear_2 {
  0% {
    top: 150px;
    right: 230px;
    opacity: 0;
  }
  100% {
    top: 200px;
    right: 160px;
    opacity: 1;
  }
}


/* BALL 3 */
@keyframes appear_3 {
  0% {
    bottom: 200px;
    left: 400px;
    opacity: 0;
  }
  100% {
    bottom: 40px;
    left: 240px;
    opacity: 1;
  }
}


/* BALL 4 */
@keyframes appear_4 {
  0% {
    bottom: 150px;
    right: 300px;
    opacity: 0;
  }
  100% {
    bottom: 0px;
    right: 200px;
    opacity: 1;
  }
}


</style>
  