<template lang="">
  <nav
    class="flex opacity-90  items-center sticky top-0 z-50 pl-[10px] md:px-auto shadow-xl h-16 bg-teal-500 justify-between sm:justify-around space-x-10"
  >
    <div class="flex">
      <div>
        <a href="#" class="font-pacifico text-slate-50 text-xl md:text-2xl">
          CAC Website
        </a>
      </div>
      <div class="p-1 mx-3">
        <a
          href="#"
          class="invisible md:visible hover:underline text-[19px] font-josefin text-slate-50 text-lg m-4 hover:text-yellow-100"
        >
          About</a
        >

        <a
          href="#"
          class="invisible md:visible hover:underline text-[19px] font-josefin text-slate-50 text-lg hover:text-yellow-100"
          >Contact</a
        >
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
      <button class="text-yellow-900 text-md hidden md:flex">
        <label
          for="toggle-example"
          class="flex relative items-center mb-4 cursor-pointer"
        >
          <input type="checkbox" id="toggle-example" class="sr-only" />
          <div
            class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"
          ></div>
          <span
            class="ml-3 text-sm font-josefin font-medium text-gray-900 dark:text-gray-300"
            >Cocho mint</span
          >
        </label>
      </button>
    </div>
  </nav>
</template>
<script>
export default {  name: "nav-bar",
}
</script>
