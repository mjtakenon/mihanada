<template>
  <div class="discography_carousel">
    <carousel :items-to-show="itemsToShow" :wrap-around="true">
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
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DiscographyText from "./DiscographyText.vue";
import DiscographyContents from "./DiscographyContents.vue";

export default defineComponent({
  components: { DiscographyContents, DiscographyText },
  mounted() {
    this.updateItemsToShow()
    window.addEventListener('resize', this.updateItemsToShow)
  },
  methods: {
    updateItemsToShow() {
      this.itemsToShow = Math.min((window.innerWidth-330)/(1280-330)*2.3 + 1.2, 3.5)
    }
  },
  data() {
    return {
      itemsToShow: 3.5,
      contents: [
        {
          no: 4, title: "花髪のロラ", description: "人は花に魅せられる話。", imagePath: "/assets/jacket_lora.png", eventName: "THE VOC@LOiD M@STER53", links: []
        }, {
          no: 3, title: "夜明け、駅前。", description: "駅前で待つ朝の話。", imagePath: "/assets/jacket_yoakeekimae.png", eventName: "M3-2022秋", links: [
            { icon: "mdi:youtube", url: "https://youtu.be/l61YwjHrTIM" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/watch/sm41297466" },
            { icon: "mdi:cart", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1684364" },
          ]
        }, {
          no: 2, title: "藍譚", description: "夏に残した燈の話。", imagePath: "/assets/jacket_lantern.png", eventName: "M3-2021秋", links: [
            { icon: "mdi:youtube", url: "https://youtu.be/ACK8eofMkrs" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/watch/sm39527910" },
            { icon: "mdi:cart", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1684364" },
          ]
        }, {
          no: 1, title: "雪狼", description: "", imagePath: "/assets/jacket_setsuro.png", eventName: "M3-2020秋", links: [
            { icon: "mdi:youtube", url: "https://youtu.be/JdW1aMtQHHE" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/watch/sm37711126" },
            { icon: "mdi:cart", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1684364" },
          ]
        }, {
          no: 0, title: "僕らの飛行計画", description: "", imagePath: "/assets/jacket_hikoukeikaku.png", eventName: "M3-2019春", links: []
        },
      ]
    }
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.joint_parallelogram {
  @apply w-full h-16 sm:h-24 xl:h-32;
  background-color: color.$mihanada-dark-0;
  clip-path: polygon(0 0, 100% 65%, 100% 100%, 0 35%);
}

.joint_triangle {
  @apply absolute;
  @apply w-full h-16 sm:h-24 xl:h-32;
  background-color: color.$mihanada;
  clip-path: polygon(0 0, 100% 65%, 100% 0);
}

</style>
