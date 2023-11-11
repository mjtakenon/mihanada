<template>
  <div class="hero_video">
    <div class="video"></div>
    <div class="overlay"></div>
  </div>
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

.hero_video {}

.video {
  @apply w-full min-h-[100lvh];
  background: url(/assets/hero_video_mid.gif) center/cover;
}

.overlay {
  @apply absolute w-full min-h-[100lvh] top-0 left-0;
  @apply backdrop-blur-sm;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
