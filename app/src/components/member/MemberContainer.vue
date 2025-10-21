<template>
  <div class="member_container">
    <template v-for="(member, idx) of members">
      <MemberContents
          :class="memberContentsClass(idx)"
          :id="member.id"
          :name="member.name"
          :bio="member.bio"
          :imagePath="member.imagePath"
          :links="member.links"
      ></MemberContents>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MemberContents from "./MemberContents.vue";
import memberMjtakenonImg from '../../../src/assets/img/member_mjtakenon.png'
import memberBakikoImg from '../../../src/assets/img/member_bakiko.png'

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
          id: "@mjtakenon", name: "ﾃｲｸﾉﾝ", bio: "曲作ってます。", imagePath: memberMjtakenonImg, links: [
            { icon: "simple-icons:x", url: "https://twitter.com/mjtakenon" },
            { icon: "mdi:youtube", url: "https://www.youtube.com/@mjtakenon" },
            { icon: "simple-icons:niconico", url: "https://www.nicovideo.jp/my/mylist/57471605" },
          ]
        },
        {
          id: "@BakikoW", name: "和田 刃牙子", bio: "歌詞書いてます。", imagePath: memberBakikoImg, links: [
            { icon: "simple-icons:x", url: "https://twitter.com/BakikoW" },
            { icon: "mdi:twitch", url: "https://www.twitch.tv/wadabakiko"},
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
  @apply mx-auto pl-1;
}
.even_member {
  @apply pr-[7%] sm:pr-[50px] md:pr-[60px] lg:pr-[80px] xl:pr-[100px];
}
.odd_member {
  @apply pl-[7%] sm:pl-[50px] md:pl-[60px] lg:pl-[80px] xl:pl-[100px];
}

</style>
