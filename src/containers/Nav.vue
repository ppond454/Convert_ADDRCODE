<template lang="">
    <nav
        class="flex opacity-90 items-center sticky top-0 z-50  md:px-10 shadow-xl h-16 bg-teal-500 justify-between space-x-10"
    >
        <div class="flex">
            <div>
                <a href="#" class="text-slate-50 text-2xl"> CAC Website </a>
            </div>
            <div class="p-1 mx-3">
                <a
                    href="#"
                    class="text-slate-50 text-lg m-3 hover:text-yellow-100"
                >
                    About</a
                >

                <a href="#" class="text-slate-50 text-lg hover:text-yellow-100"
                    >Contact</a
                >
            </div>
        </div>
        <div>
            <button class="text-yellow-900 text-md">Dark</button>
        </div>
    </nav>
</template>
<script>
export default {
    name: "nav-bar",
}
</script>
