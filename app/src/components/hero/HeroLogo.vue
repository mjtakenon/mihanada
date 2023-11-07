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
  @apply w-4/5 md:w-2/5 max-h-[50lvh] absolute;

  @apply left-[8lvw] md:left-[28lvw] top-[25lvh];
}
</style>
