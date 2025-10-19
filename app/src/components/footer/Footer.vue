<template>
  <footer>
    <div class="circle_1"></div>
    <div class="circle_2"></div>
    <div class="copyright">&copy; 2025 Mihanada </div>
    <FooterLinks
      class="links"
      :links="links"
    ></FooterLinks>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import FooterLinks from "./FooterLinks.vue";

export default defineComponent({
  components: {FooterLinks},
  data() {
    return {
      links: [
        {icon: "mdi:youtube", url: "https://www.youtube.com/@7EC7D8"},
        {icon: "simple-icons:niconico", url: "https://sp.nicovideo.jp/my/mylist/57471605"},
      ]
    }
  },
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

footer {
  @apply relative;
  @apply w-full h-[30vw] max-h-[150px];
  @apply mt-16;
  overflow: clip;
}

.copyright {
  @apply absolute;
  @apply p-5 sm:pb-6 sm:pl-8 sm:pb-5 xl:pl-16;
  @apply bottom-0;
  @apply text-xs sm:text-base;
  color: color.$background;
}

.circle_1 {
  @apply absolute;
  width: calc(30vw + 300px); height: calc(30vw + 300px);
  left: calc(80% - 200px); top: 0;

  @apply rounded-full;
  background-color: color.$mihanada-dark-1;
}

.circle_2 {
  @apply absolute;
  width: calc(25vw + 250px); height: calc(25vw + 250px);
  left: calc(-10% - 80px); top: calc(55% - 2vw);
  @apply rounded-full;
  background-color: color.$mihanada-dark-2;
}

.links {
  @apply absolute;
  @apply bottom-4 right-0;
}
</style>
