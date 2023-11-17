<template>
  <div id="hero">
    <HeroVideo></HeroVideo>
    <HeroLogo></HeroLogo>
    <HeroArrow></HeroArrow>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeroVideo from './HeroVideo.vue'
import HeroLogo from "./HeroLogo.vue";
import HeroArrow from "./HeroArrow.vue";

export default defineComponent({
  components: {
    HeroVideo,
    HeroLogo,
    HeroArrow,
  },
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

#hero {
  background-color: color.$mihanada;
}

</style>
