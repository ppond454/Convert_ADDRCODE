<template lang="">
  <div
    style="backdrop-filter: blur(20px)"
    class="bg-opacity-80 bg-clip-padding bg-green-100 mx-[10px] my-[50px] block justify-center flex-col shadow-2xl md:w-[700px] md:h-[500px] rounded-2xl"
  >
    <div class="flex justify-center">
      <h1
        class="mt-[20px] mx-[10px] md:text-[42px] text-[32px] font-extrabold text-[#684531] font-allan"
      >
        Convert Address Code to Address Name
      </h1>
    </div>

    <div class="m-4">
      <div class="flex items-center justify-center w-full">
        <label
          class="flex flex-col  h-32 border-4 border-[#CD9865] border-dashed hover:bg-yellow-100 hover:border-[#836c5f]"
        >
          <div class="flex flex-col items-center justify-center pt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-[#684531] group-hover:text-[#836c5f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p
              class="pt-1 text-sm tracking-wider text-[#684531] group-hover:text-[#836c5f]"
            >
              Attach a file
            </p>
          </div>
          <input type="file" class="form-control opacity-0" />
        </label>
      </div>
    </div>
    <div class="flex justify-center p-2">
      <button
        class="mx-2 w-[150px] cursor-not-allowed px-4 py-2 text-white bg-purple-600 hover:bg-purple-500 rounded shadow-xl"
      >
        Convert
      </button>
      <button
        class="w-[150px] px-4 py-2 text-white bg-red-400 hover:bg-red-300 rounded shadow-xl"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-card",
}
</script>
<style lang=""></style>
