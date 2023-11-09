<template>
  <div class="member_joint">
    <div class="joint_ellipse"></div>
    <div class="joint_upper"></div>
    <div class="joint_lower"></div>
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

.joint_upper {
  @apply h-8 sm:h-12 xl:h-16;
  background-color: color.$mihanada-dark-1;
}

.joint_lower {
  @apply h-8 sm:h-12 xl:h-16;
}

.joint_ellipse {
  @apply absolute;
  @apply w-full h-16 sm:h-24 xl:h-32;
  background-color: color.$mihanada-dark-1;
  clip-path: ellipse(50% 15% at 50% 50%);
}

</style>
