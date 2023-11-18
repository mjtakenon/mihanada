<template>
  <div class="news_article">
    <div class="news_date">
      {{ newsArticle.date.toLocaleDateString('ja-jp', {year: "numeric", month: "2-digit", day: "2-digit"}).replace(/\//g,".") }}
    </div>
    <div class="news_contents">
      <NewsContents :news-contents="newsArticle.contents"></NewsContents>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {NewsArticle} from "../../scripts/entity/NewsArticle.ts";
import NewsContents from "./NewsContents.vue";

export default defineComponent({
  components: {NewsContents},
  setup() {},
  computed: {},
  props: {
    newsArticle: {
      require: true,
      default: {
        date: new Date(),
        contents: [{
          text: "",
        }],
      },
      type: Object as PropType<NewsArticle>
    }
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.news_article {
  @apply my-2;
  @apply flex;
  @apply text-sm sm:text-base xl:text-lg;
  color: color.$text-black;
}

.news_date {
  @apply basis-20 xl:basis-24;
  @apply min-w-[4rem] sm:min-w-[5rem] xl:min-w-[6rem];
  @apply mx-2;
  //font-family: 'Roboto Mono', sans-serif;
}

.news_contents {
  @apply basis-full;
}
</style>
