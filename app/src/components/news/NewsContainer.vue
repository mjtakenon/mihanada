<template>
  <div class="news_container">
    <div class="circle"></div>
    <NewsText class="news_text"></NewsText>
    <template v-for="(newsArticle, idx) of newsArticles">
      <template v-if="idx!==0">
        <hr class="article_partition"/>
      </template>
      <NewsArticle :news-article="newsArticle" ></NewsArticle>
    </template>
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
  data() {
    return {
      newsArticles: [
        {
          date: new Date("2025/10/21"),
          contents: [
            {
              text: "「ありふれる」クロスフェード動画を公開しました！（",
            },
            {
              text: "YouTube",
              link: "https://www.youtube.com/watch?v=2dknkf_W2d8",
              style: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
            },
            {
              text: " / ",
            },
            {
              text: "ニコニコ動画",
              link: "https://www.nicovideo.jp/watch/sm45538849",
              style: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
            },
            {
              text: "）",
            },
          ],
        },
        {
          date: new Date("2025/10/20"),
          contents: [
            {
              text: "M3-2025秋",
              link: "https://www.m3net.jp/",
              style: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
            },
            {
              text: "に参加します！新譜「ありふれる」頒布予定です。スペースでク-31zでお待ちしています！",
            }
          ],
        },
        {
          date: new Date("2023/11/18"),
          contents: [
            {
              text: "「花髪のロラ」クロスフェード動画を公開しました！（",
            },
            {
              text: "YouTube",
              link: "https://www.youtube.com/watch?v=qHDPo9wofus",
              style: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
            },
            {
              text: " / ",
            },
            {
              text: "ニコニコ動画",
              link: "https://www.nicovideo.jp/watch/sm43034832",
              style: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
            },
            {
              text: "）",
            },
          ],
        },
        {
          date: new Date("2023/11/17"),
          contents: [
            {
              text: "THE VOC@LOiD M@STER53",
              link: "https://ketto.com/tvm/",
              style: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
            },
            {
              text: "に参加します！新譜「花髪のロラ」頒布予定です。スペースE44でお待ちしています！",
            }
          ],
        },
        {
          date: new Date("2023/11/17"),
          contents: [
            {
              text: "サイトを公開しました！"
            },
          ],
        },
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
