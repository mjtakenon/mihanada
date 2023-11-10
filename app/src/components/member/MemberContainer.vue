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
          id: "@SND_50Y0", name: "SND", bio: "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介", imagePath: "src/assets/member_snd.jpg", links: [
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
  @apply mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-64 my-5 sm:my-10 xl:my-20
}
.even_member {
  @apply mr-12 sm:mr-[128px] md:mr-[192px] lg:mr-[256px] xl:mr-[384px];
}
.odd_member {
  @apply ml-12 sm:ml-[128px] md:ml-[192px] lg:ml-[256px] xl:ml-[384px];
}

</style>
