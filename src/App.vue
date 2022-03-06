<template>
  <div class="bg-gradient-to-tl  min-h-screen from-[#93fb9d] to-[#09c7fb] w-full h-[903px]">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import Nav from "./containers/Nav.vue"

export default {
  components: {
    "nav-bar": Nav,
  },
}
</script>
<style lang=""></style>
