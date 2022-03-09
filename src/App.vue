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

export default {
  name: "home",
  setup() {

  },
}
</script>
