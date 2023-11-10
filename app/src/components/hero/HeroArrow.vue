<template>
  <div class="hero_arrow">
    <div class="arrow_container">
      <div>
        <span class="arrow_text">scroll</span>
      </div>
      <div>
        <Icon class="arrow_icon" icon="material-symbols-light:more-down" />
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

.arrow_container {
  text-align: center;
  color: color.$background;
  @apply w-4/5 md:w-2/5 max-h-[50lvh] absolute;

  @apply left-[10lvw] md:left-[30lvw] bottom-[5lvh] sm:bottom-[4lvh] md:bottom-[2lvh];
}

.arrow_text {
  @apply text-base sm:text-lg md:text-xl;
  font-family: 'Inter', sans-serif;
  @apply font-medium sm:font-black;
}

.arrow_icon {
  @apply w-full h-8 sm:h-[4lvh] md:h-[6lvh] min-h-[20px];
  @apply sm:mt-[-4px] md:mt-[-2px] mt-0;
  @apply rotate-[-45deg];
}
</style>
