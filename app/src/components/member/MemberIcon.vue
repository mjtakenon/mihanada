<template>
  <div class="member_icon">
    <div class="circle_1"></div>
    <div class="circle_2"></div>
    <img class="image" :src="imagePath" alt="">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  components: {},
  setup() {},
  computed: {},
  props: {
    imagePath: {
      require: true,
      default: "",
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.member_icon {
  @apply relative;
  width: 100%;
  height: 100%;
}

.image {
  @apply relative;
  border-radius:50%;
}

.circle_1 {
  @apply absolute;
  @apply w-[97%] h-[97%];
  @apply top-[6px] left-[6px] sm:top-[8px] sm:left-[8px] md:top-[12px] md:left-[12px] xl:top-[16px] xl:left-[16px];
  @apply rounded-full;
  background-color: color.$mihanada-dark-2;
}

.circle_2 {
  @apply absolute;
  @apply w-[97%] h-[97%];
  @apply top-[-6px] left-[-12px] sm:top-[-8px] sm:left-[-16px] md:top-[-12px] md:left-[-24px] xl:top-[-16px] xl:left-[-32px];
  @apply rounded-full;
  @apply border-4 sm:border-[6px] xl:border-[10px];
  border-color: color.$mihanada-light-2;
}

</style>
