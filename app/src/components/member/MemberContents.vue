<template>
  <div class="member_contents">
    <div class="member_contents_flex">
      <MemberIcon
        class="icon"
        :image-path="imagePath"
      ></MemberIcon>
      <MemberName
        class="texts"
        :name="name"
        :id="id"
        :bio="bio"
        :links="links"
      ></MemberName>
      <MemberLinks
        class="links"
        :links="links"
      ></MemberLinks>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Link} from "../../scripts/entity/Link.ts";
import MemberIcon from "./MemberIcon.vue";
import MemberName from "./MemberName.vue";
import MemberLinks from "./MemberLinks.vue";

export default defineComponent({
  components: {MemberName, MemberIcon, MemberLinks},
  setup() {},
  computed: {},
  props: {
    id: {
      require: true,
      default: 0,
      type: String,
    },
    name: {
      require: true,
      default: "",
      type: String,
    },
    bio: {
      require: true,
      default: "",
      type: String,
    },
    imagePath: {
      require: true,
      default: "",
      type: String,
    },
    eventName: {
      require: true,
      default: "",
      type: String,
    },
    links: {
      require: true,
      default: [],
      type: Array as PropType<Link[]>
    },
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.member_contents_flex {
  @apply flex;
  align-items: center;
}

.icon {
  @apply w-24 sm:w-32 md:w-48 xl:w-64;
}

.texts {
  @apply flex-auto;
  @apply w-32 sm:w-48 md:w-64 xl:w-96;
  @apply mx-5 sm:mx-10;
}

.links {
  @apply hidden lg:flex;
}

</style>
