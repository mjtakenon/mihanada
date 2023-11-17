<template>
  <div class="hero_arrow">
    <a href="#" v-scroll-to="'#news'" >
      <div class="arrow_container">
        <div>
          <span class="arrow_text">scroll</span>
        </div>
        <div>
          <svg class="arrow_icon" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.6325 54.3824L6.58276 30.3327L10.0179 26.8963L30.6325 47.5109L51.2458 26.8963L54.6822 30.3327L30.6325 54.3824Z"/>
            <path d="M30.6325 35.7976L6.58276 11.7479L10.0179 8.31149L30.6325 28.9261L51.2458 8.31149L54.6822 11.7479L30.6325 35.7976Z"/>
          </svg>
        </div>
      </div>
    </a>
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

  animation: arrow_animation 1.5s linear 0s infinite ;
  @keyframes arrow_animation {
    0%{bottom:1%;}
    50%{bottom:2.5%;}
    100%{bottom:1%;}
  }
}

.arrow_text {
  @apply text-base sm:text-lg md:text-2xl;
  font-family: 'Inter', sans-serif;
  @apply font-medium sm:font-black;
}

.arrow_icon {
  @apply w-full h-8 sm:h-[3lvh] md:h-[4lvh] min-h-[20px];
  @apply mt-0 md:mt-1;

  fill: color.$background;
}
</style>
