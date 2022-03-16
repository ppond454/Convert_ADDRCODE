<template lang="">
  <div
    class="bg-opacity-80 bg-clip-padding dark:bg-white bg-green-100 mx-[10px] my-[50px] block justify-center flex-col shadow-2xl md:w-[700px] md:h-[500px] rounded-2xl"
  >
    <div class="flex justify-center">
      <h1
        class="mt-[20px] mx-[10px] md:text-[42px] text-[32px] font-extrabold text-[#684531] font-allan"
      >
        Watch the Tutorial !
      </h1>
    </div>
    <div class="mx-[40px] my-[10px]">
      <LiteYouTubeEmbed class="" id="9egKxXu499I" title="test" />
    </div>
  </div>
</template>
<script>
import LiteYouTubeEmbed from "vue-lite-youtube-embed"
import "vue-lite-youtube-embed/dist/style.css"

export default {
  name: "tutorial-component",
  components: {
    LiteYouTubeEmbed,
  },
}
</script>
