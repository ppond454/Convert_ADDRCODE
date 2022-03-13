<template>
  <div :class="isChangeTheme && 'dark'">
    <div
      class="dark:from-red-300 dark:to-white bg-gradient-to-tl min-h-screen from-[#93fb9d] to-[#09c7fb] w-full h-[903px]"
    >
      <nav-bar />
      <router-view />
      <footer-comp />
    </div>
  </div>
</template>

<script>
import useTheme from "./hooks/useTheme"

export default {
  name: "home",
  setup() {
    const { isChangeTheme } = useTheme()

    return {
      isChangeTheme,
    }
  },
}
</script>
