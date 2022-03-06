<template lang="">
  <div class=" md:flex justify-center">
   <form-card/>
   <tutorial-component/>
  </div>
</template>
<script>
import TutorialVue from '../containers/Tutorial.vue'
import FormCard from "../containers/FormCard.vue"

export default {

  name: "home-app",
  components: {
    "form-card":FormCard,
    "tutorial-component": TutorialVue
  },
}
</script>
<style lang=""></style>
