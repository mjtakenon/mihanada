<template>
  <div class="news_container">
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
        { date: new Date("2023/11/14"), contents: "THE VOC@LOiD M@STER53に参加します！新譜「花髪のロラ」頒布予定です。スペースE44でお待ちしていますー！" },
        { date: new Date("2023/11/13"), contents: "公式サイトを作成しました！" },
      ]
    }
  }
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

.news_text {
  @apply pb-2;
}

.article_partition {
  @apply border;
  border-color: color.$text-whitegray;
}

</style>
