<template>
  <div class="news_article">
    <div class="news_date">
      {{ date.toLocaleDateString('ja-jp', {year: "numeric", month: "2-digit", day: "2-digit"}).replace(/\//g,".") }}
    </div>
    <div class="news_contents">
      {{ contents }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  components: {},
  setup() {},
  computed: {},
  props: {
    date: {
      require: true,
      default: new Date(),
      type: Date,
    },
    contents: {
      require: true,
      default: "",
      type: String,
    }
  },
})
</script>

<style scoped lang="scss">
.news_article {
  @apply my-2;
  @apply flex;
  @apply text-sm sm:text-base xl:text-lg;
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
