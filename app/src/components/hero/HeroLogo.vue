<template>
  <div class="hero_logo">
    <img class="logo" src="../../assets/hero_logo.svg" alt="ロゴ">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  components: {},
  setup() {},
  computed: {},
  props: {},
})
</script>

<style scoped lang="scss">
.hero_logo {
  @apply w-full;
}

.logo {
  @apply w-4/5 md:w-2/5 absolute;
  @apply left-[8vw] md:left-[28vw] top-[25vh];
}
</style>
