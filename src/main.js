import { createApp } from "vue"

import App from "./App.vue"
import router from "./router/index"
import "./index.css"
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
import Modal from "./components/Modal.vue"

const app = createApp(App)

app.component("nav-bar",Nav)
.component("footer-comp",Footer)
.component("modal",Modal)
app.use(router)
app.mount("#app")
