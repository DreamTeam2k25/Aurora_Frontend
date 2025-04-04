import router from "@/router"
export const appearMessage = (resultReq, goTo, req, appear) => {
    req.value = resultReq
    appear.value = true
    setTimeout(() => {
      appear.value = false
      
      router.push(goTo).then(()=> {
        router.go()
      })
    }, 3000)
  }