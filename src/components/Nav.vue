<template lang="">
  <nav
    class="flex opacity-90 items-center sticky top-0 z-50 pl-[10px] md:px-auto shadow-xl h-16 bg-teal-500 dark:bg-red-200 justify-between sm:justify-around space-x-10"
  >
    <div class="flex">
      <div>
        <a href="#" class="font-pacifico text-slate-50 text-xl md:text-2xl">
          CAC Website
        </a>
      </div>
    </div>
    <div class="">
      <button class="md:hidden">
        <div
          class="hover:bg-blue-400 border-solid border-2 p-2 border-sky-200 space-y-2 bg-sky-600 rounded shadow-lg"
        >
          <span class="block w-6 h-[2px] bg-stone-100 animate-pulse"></span>
          <span class="block w-6 h-[2px] bg-stone-100 animate-pulse"></span>
          <span class="block w-6 h-[2px] bg-stone-100 animate-pulse"></span>
        </div>
      </button>

      <transition name="toggle">
        <button
          v-if="sw === 'Cocho-mint'"
          @click.prevent="onTheme"
          class="text-yellow-900 font-josefin text-md hidden md:flex w-[100px]"
        >
          <div class="relative justify-center inline-flex">
            <img
              src="../assets/thememint.png"
              alt="toggle"
              class="w-[60px] h-[60px]"
            />
            <label class="ml-[1px] mt-[10px] text-[14px]">Cocho Mint</label>
          </div>
        </button>
        <button
          v-else-if="sw === 'Yogurt'"
          @click.prevent="onTheme"
          class="relative text-yellow-900 font-josefin text-md hidden md:flex w-[100px]"
        >
          <div class="justify-center inline-flex">
            <img
              src="../assets/themeyogurt.png"
              alt="toggle"
              class="w-[60px] h-[60px]"
            />
            <label class="ml-[1px] mt-[20px] text-[14px]">Yogurt</label>
          </div>
        </button>
      </transition>
    </div>
  </nav>
</template>
<script>
import useTheme from "../hooks/useTheme"
export default {
  name: "nav-bar",
  setup() {
    const { onTheme, sw } = useTheme()

    return {
      onTheme,
      sw,
    }
  },
}
</script>
<style scoped>
.toggle-enter-from {
  opacity: 1;
  transform: translateY(-2rem);
}
.toggle-enter-to {
  opacity: 1;
  transform: translateY(0rem);
}
.toggle-enter-active {
  transition: all 0.3s ease-out;
}
</style>
>
