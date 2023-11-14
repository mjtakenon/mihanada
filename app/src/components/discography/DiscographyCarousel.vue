<template>
  <div class="discography_carousel">
    <carousel ref="carousel" v-model="current" :items-to-show="itemsToShow" :wrap-around="true">
      <slide v-for="content in contents" :key="content.no">
        <DiscographyContents
            :no="content.no"
            :title="content.title"
            :description="content.description"
            :imagePath="content.imagePath"
            :eventName="content.eventName"
            :links="content.links"
        ></DiscographyContents>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
    <div class="carousel_navigation">
      <button class="left">
        <font-awesome-icon @click="prev" class="navigation_button" :icon="['fas', 'circle-arrow-left']" />
      </button>
      <button class="right">
        <font-awesome-icon @click="next" class="navigation_button" :icon="['fas', 'circle-arrow-right']" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DiscographyText from "./DiscographyText.vue";
import DiscographyContents from "./DiscographyContents.vue";
import jacketHikoukeikakuImg from '../../../src/assets/img/jacket_hikoukeikaku.png'
import jacketSetsuroImg from '../../../src/assets/img/jacket_setsuro.png'
import jacketLanternImg from '../../../src/assets/img/jacket_lantern.png'
import jacketYoakeekimaeImg from '../../../src/assets/img/jacket_yoakeekimae.png'
import jacketLoraImg from '../../../src/assets/img/jacket_lora.png'

export default defineComponent({
  components: { DiscographyContents, DiscographyText },
  mounted() {
    this.updateItemsToShow()
    window.addEventListener('resize', this.updateItemsToShow)
  },
  methods: {
    updateItemsToShow() {
      this.itemsToShow = Math.min((window.innerWidth-330)/(1280-330)*2.3 + 1.2, 3.5)
    },
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
  data() {
    return {
      itemsToShow: 3.5,
      contents: [
        {
          no: 4, title: "花髪のロラ", description: "人は花に魅せられる話。", imagePath: jacketLoraImg, eventName: "THE VOC@LOiD M@STER53", links: []
        }, {
          no: 3, title: "夜明け、駅前。", description: "駅前で待つ朝の話。", imagePath: jacketYoakeekimaeImg, eventName: "M3-2022秋", links: [
            { icon: "mdi:youtube", url: "https://youtu.be/l61YwjHrTIM" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/watch/sm41297466" },
            { icon: "mdi:cart", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1684364" },
          ]
        }, {
          no: 2, title: "藍譚", description: "夏に残した燈の話。", imagePath: jacketLanternImg, eventName: "M3-2021秋", links: [
            { icon: "mdi:youtube", url: "https://youtu.be/ACK8eofMkrs" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/watch/sm39527910" },
            { icon: "mdi:cart", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1684364" },
          ]
        }, {
          no: 1, title: "雪狼", description: "", imagePath: jacketSetsuroImg, eventName: "M3-2020秋", links: [
            { icon: "mdi:youtube", url: "https://youtu.be/JdW1aMtQHHE" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/watch/sm37711126" },
            { icon: "mdi:cart", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1684364" },
          ]
        }, {
          no: 0, title: "僕らの飛行計画", description: "", imagePath: jacketHikoukeikakuImg, eventName: "M3-2019春", links: []
        },
      ]
    }
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.discography_carousel {
  @apply relative;

  .carousel_navigation {
    @apply absolute flex;
    @apply w-full h-full;
    @apply top-0;
    @apply flex-wrap justify-between;
    @apply pointer-events-none;

    .navigation_button {
      @apply w-8 h-8 sm:w-12 sm:h-12;
      @apply p-4 sm:p-6;
      color: color.$background;
      @apply stroke-[16px];
      stroke: color.$mihanada-dark-1;
      filter: drop-shadow(2px 2px 3px color.$text-gray);
      @apply pointer-events-auto;
    }
  }
}

</style>
