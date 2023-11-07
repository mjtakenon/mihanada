<template>
  <div class="hero_arrow">
    <div class="arrow_container">
      <div>
        <span class="arrow_text">scroll</span>
      </div>
      <div>
        <font-awesome-icon class="arrow_icon" :icon="['fas', 'angles-down', 'solid']" />
      </div>
    </div>
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

.hero_arrow {
  //@apply w-full;
}

.arrow_container {
  text-align: center;
  color: color.$background;
  @apply w-4/5 md:w-2/5 max-h-[50lvh] absolute;

  @apply left-[10lvw] md:left-[30lvw] bottom-[5lvh] sm:bottom-[2lvh];
}

.arrow_text {
  @apply text-base sm:text-xl;
}

.arrow_icon {
  @apply w-full h-4 sm:h-[4lvh] max-h-[10lvh];
}
</style>
