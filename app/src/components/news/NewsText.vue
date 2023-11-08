<template>
  <div class="news_text">
    <span class="first_letter">N</span>ews
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
@use "../../styles/color";

.news_text {
  @apply text-4xl sm:text-5xl xl:text-5xl;
  @apply font-black;
  color: color.$mihanada;
}

.first_letter {
  @apply text-5xl sm:text-6xl xl:text-7xl;
}

</style>
