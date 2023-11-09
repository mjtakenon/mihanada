<template>
  <div class="discography_text">Discography</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  components: {},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.discography_text {
  @apply sm:mx-20 sm:pb-16 pb-8 text-center sm:text-left;
  @apply text-5xl sm:text-6xl xl:text-7xl;
  color: color.$mihanada-dark-1;
  -webkit-text-stroke: 3px color.$background;

  @media screen and (min-width:640px) and ( max-width:1280px) {
    -webkit-text-stroke: 4px color.$background;
  }
  @media screen and (min-width:1280px) {
    -webkit-text-stroke: 5px color.$background;
  }
}
.discography_text::before{
  content: "Discography";
  -webkit-text-stroke: 0;
  color: color.$mihanada-dark-1;
  position: absolute;
}
</style>
