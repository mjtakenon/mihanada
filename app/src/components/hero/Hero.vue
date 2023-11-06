<template>
  <div class="hero">
    <HeroVideo></HeroVideo>
    <HeroLogo></HeroLogo>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeroVideo from './HeroVideo.vue'
import HeroLogo from "./HeroLogo.vue";

export default defineComponent({
  components: {
    HeroVideo,
    HeroLogo,
  },
  setup() {},
  computed: {},
  props: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.hero {
  background-color: color.$mihanada;
}
</style>
