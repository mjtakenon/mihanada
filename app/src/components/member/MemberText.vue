<template>
  <div class="member_text">
    <div class="text">
      Member
    </div>
    <div class="underscore">
      <div class="underscore_1"></div>
      <div class="underscore_2"></div>
      <div class="underscore_3"></div>
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

.text {
  @apply mx-4 sm:mx-20;
  @apply text-5xl sm:text-6xl xl:text-7xl text-left font-black;
  color: color.$mihanada;
}

.underscore {
  @apply flex;
  @apply h-1 sm:h-2 xl:h-2 mt-[-8px] sm:mt-[-10px] mb-8;
}

.underscore_1 {
  @apply w-[60%];
  background-color: color.$mihanada;
}

.underscore_2 {
  @apply w-[25%];
  background-color: color.$mihanada-dark-0;
}

.underscore_3 {
  @apply w-[15%];
  background-color: color.$mihanada-dark-1;
}
</style>
