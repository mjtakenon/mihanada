<template>
  <div class="news_container">
    <NewsText></NewsText>
    <NewsArticle></NewsArticle>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NewsText from "./NewsText.vue";
import NewsArticle from "./NewsArticle.vue";

export default defineComponent({
  components: {NewsArticle, NewsText},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.news_container {
  @apply w-full sm:w-[80%] xl:w-[60%];
  @apply my-10 sm:my-14;
  @apply p-4 sm:p-8;
  background-color: color.$background;
  @apply shadow-[0_14px_0_0_#64B6CA] sm:shadow-[14px_14px_0_0_#64B6CA];
  //@apply shadow-[14px_14px_0_0_color:var(color.$mihanada-dark-1)];
  @apply sm:rounded-2xl;
}

</style>
