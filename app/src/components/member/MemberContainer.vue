<template>
  <div class="member_container">
    <div v-for="(member, idx) of members">
      <MemberContents
          :class="memberContentsClass(idx)"
          :id="member.id"
          :name="member.name"
          :bio="member.bio"
          :imagePath="member.imagePath"
          :links="member.links"
      ></MemberContents>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MemberContents from "./MemberContents.vue";

export default defineComponent({
  components: {MemberContents},
  computed: {
    memberContentsClass() {
        return (idx: number) => { return {
        'member_contents': true,
        'even_member': idx%2===0,
        'odd_member': idx%2===1,
      }
    }},
  },
  methods: {},
  data() {
    return {
      members: [
        {
          id: "@mjtakenon", name: "ﾃｲｸﾉﾝ", bio: "曲作ってます。", imagePath: "src/assets/member_mjtakenon.png", links: [
            { icon: "simple-icons:x", url: "https://twitter.com/mjtakenon" },
            { icon: "mdi:youtube", url: "https://www.youtube.com/@mjtakenon" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/my/mylist/57471605" },
          ]
        },
        {
          id: "@SND_50Y0", name: "SND", bio: "歌詞書いてます。", imagePath: "src/assets/member_snd.png", links: [
            { icon: "simple-icons:x", url: "https://twitter.com/SND_50Y0" },
            { icon: "mdi:twitch", url: "https://www.twitch.tv/inubeco"},
          ]
        },
      ]
    }
  },
})
</script>

<style scoped lang="scss">

.member_contents {
  @apply min-w-[300px] w-[85%] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px];
  @apply my-5 sm:my-10 xl:my-20;
  @apply mx-auto;
}
.even_member {
  @apply pr-[7%] sm:pr-[50px] md:pr-[60px] lg:pr-[80px] xl:pr-[100px];
}
.odd_member {
  @apply pl-[7%] sm:pl-[50px] md:pl-[60px] lg:pl-[80px] xl:pl-[100px];
}

</style>
