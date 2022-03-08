<template>
  <div
    class="bg-gradient-to-tl min-h-screen from-[#93fb9d] to-[#09c7fb] w-full h-[903px]"
  >
    <nav-bar />
    <router-view />
    <footer-comp />
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: "home",
  setup() {
    const message = ref("")

    const handleClick = async () => {
      const res = await fetch("http://127.0.0.1:4000")
      const data = await res.json()
      console.log(data.msg)
      message.value = data.msg
    }

    return { handleClick, message }
  },
}
</script>
