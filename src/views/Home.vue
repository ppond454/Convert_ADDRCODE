<template lang="">
  <div class="md:flex justify-center">
    <modal />
    <form-card />
    <tutorial-component />
  </div>
</template>
<script>
import TutorialVue from "../components/Tutorial.vue"
import FormCard from "../components/FormCard.vue"

export default {
  name: "home-app",
  components: {
    "form-card": FormCard,
    "tutorial-component": TutorialVue,
  },
}
</script>
<style lang=""></style>
