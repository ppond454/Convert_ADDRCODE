<template>
    <div class="bg-gradient-to-tl from-[#93fb9d]  to-[#09c7fb]  w-full h-[1000px]">
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
