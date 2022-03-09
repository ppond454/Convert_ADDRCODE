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
          class="flex flex-col h-32 border-4 border-[#CD9865] border-dashed hover:bg-yellow-100 hover:border-[#836c5f]"
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
            <p>
              {{ nameFile }}
            </p>
          </div>
          <input
            type="file"
            class="form-control opacity-0"
            @change="selectFile"
          />
        </label>
      </div>
    </div>
    <div class="flex justify-center p-2">
      <button
        v-if="isUploaded !== null"
        :disabled="nameFile === null"
        @click.prevent="handleFileDownload"
        class="mx-2 w-[150px] px-4 py-2 text-white bg-purple-600 hover:bg-purple-500 rounded shadow-xl"
        :class="{ [`cursor-not-allowed`]: nameFile === null }"
      >
        <p v-if="!isLoading">Download here</p>
        <p v-if="isLoading" >
          <svg
            role="status"
            class="inline mb-[1px] w-5 h-5 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            /></svg
          > Loading...
        </p>
      </button>
      <button
        v-if="isUploaded === null"
        :disabled="nameFile === null"
        @click.prevent="handleFileUpload"
        class="mx-2 w-[150px] px-4 py-2 text-white bg-purple-600 hover:bg-purple-500 rounded shadow-xl"
        :class="{ [`cursor-not-allowed`]: nameFile === null }"
      >
        <p v-if="!isLoading">Convert</p>
        <p v-if="isLoading" >
          <svg
            role="status"
            class="inline mb-[1px] w-5 h-5 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            /></svg
          > Loading...
        </p>
      </button>
      <button
        v-if="isUploaded === null"
        @click.prevent="clearData()"
        class="w-[150px] px-4 py-2 text-white bg-red-400 hover:bg-red-300 rounded shadow-xl"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import useHandlefile from "../hooks/useHandlefile"
export default {
  name: "form-card",
  setup() {
    const {
      selectFile,
      handleFileUpload,
      clearData,
      handleFileDownload,
      file,
      nameFile,
      isUploaded,
      isLoading,
    } = useHandlefile()

    return {
      selectFile,
      handleFileUpload,
      clearData,
      handleFileDownload,
      file,
      nameFile,
      isUploaded,
      isLoading,
    }
  },
}
</script>
