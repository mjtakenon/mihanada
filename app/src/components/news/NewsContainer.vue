<template>
  <div class="news_container">
    <div class="circle"></div>
    <NewsText class="news_text"></NewsText>
    <div v-for="(newsArticle, idx) of newsArticles">
      <div v-if="idx!==0">
        <hr class="article_partition"/>
      </div>
      <NewsArticle :date="newsArticle.date" :contents="newsArticle.contents" ></NewsArticle>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NewsText from "./NewsText.vue";
import NewsArticle from "./NewsArticle.vue";

export default defineComponent({
  components: {NewsArticle, NewsText},
  setup() {
  },
  computed: {},
  data() {
    return {
      newsArticles: [
        { date: new Date("2023/11/12"), contents: "THE VOC@LOiD M@STER53に参加します！新譜「花髪のロラ」頒布予定です。スペースE44でお待ちしています！" },
        { date: new Date("2023/11/12"), contents: "公式サイトを作成しました！" },
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.news_container {
  @apply relative;
  @apply w-full sm:w-[80%] xl:w-[60%];
  @apply mt-10 mb-5 sm:mt-14 mb-7;
  @apply p-4 sm:p-8;
  background-color: color.$background;
  @apply shadow-[0_14px_0_0_#64B6CA] sm:shadow-[14px_14px_0_0_#64B6CA];
  @apply sm:rounded-2xl;
  overflow: clip;
}

.news_text {
  @apply relative;
  @apply pb-2;
}

.article_partition {
  @apply relative;
  @apply border;
  border-color: color.$text-whitegray;
}

//.circle {
//  @apply absolute;
//  @apply w-[300px] h-[300px];
//  @apply left-[70%] bottom-[-80%];
//  @apply rounded-full;
//  @apply border-4 sm:border-[5px] xl:border-[6px];
//  border-color: color.$mihanada-dark-1;
//}

</style>
