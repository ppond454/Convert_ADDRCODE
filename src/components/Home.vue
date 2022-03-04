<template lang="">
    <div class="m-20 shadow-2xl bg-slate-200  h-[500px] rounded-2xl">
        <div class=" flex justify-center">
            <h1 class="m-[3rem] text-3xl">Convert Address Code to Address Name</h1>
        </div>
        <div class="flex justify-center">
            <div class="mb-3 w-96">
                <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                    >File input .csv only</label
                >
                <input
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "home-app",
}
</script>
<style lang=""></style>
