<template>
  <div>
    <HeroMovie></HeroMovie>
    <HeroLogo></HeroLogo>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeroMovie from './HeroMovie.vue'
import HeroLogo from "./HeroLogo.vue";

export default defineComponent({
  components: {
    HeroMovie,
    HeroLogo,
  },
  setup() {},
  computed: {},
  props: {},
})
</script>

<style scoped lang="scss">
</style>
