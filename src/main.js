import { createApp } from "vue"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import App from "./App.vue"
import router from "./router/index"
import "./index.css"
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
import Modal from "./components/Modal.vue"

const app = createApp(App)

app
  .component("nav-bar", Nav)
  .component("footer-comp", Footer)
  .component("modal", Modal)
app.use(router)
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 1,
  newestOnTop: true,
})

app.mount("#app")
