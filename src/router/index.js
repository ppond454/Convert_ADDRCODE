import { createRouter, createWebHistory } from "vue-router"
import Home from "/src/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    //   icon: "../assets/thememint.png"
    },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next)=>{
    document.title = `CaC | ${to.meta.title}`
    // document.querySelector("[rel='icon']").setAttribute('href',to.meta.icon)
    next()
})

export default router
