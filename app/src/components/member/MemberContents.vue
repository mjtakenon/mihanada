<template>
  <div class="member_contents">
    <MemberIcon class="icon" :image-path="imagePath"></MemberIcon>
    <div class="texts">
      <div class="name">{{ name }}</div>
      <div class="id">{{ id }}</div>
      <div class="bio">{{ bio }}</div>
    </div>
    <div class="links">
      <div v-for="link of links.reverse()">
        <a :href="link.url"><Icon :class="linkClass(link)" :icon="link.icon"></Icon></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Link} from "../../scripts/entity/Link.ts";
import MemberIcon from "./MemberIcon.vue";

export default defineComponent({
  components: {MemberIcon},
  setup() {},
  computed: {
    linkClass() {
      return (link: Link) => { return {
        'link': true,
        'niconico': link.icon === 'simple-icons:niconico',
      }}
    }
  },
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
    }
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.member_contents {
  @apply flex;
  align-items: center;
}

.icon {
  @apply w-32 sm:w-48 xl:w-64;
}

.texts {
  @apply flex-auto;
  @apply w-32 sm:w-48 xl:w-96;
  @apply mx-5 sm:mx-10;
}

.links {
  @apply sm:w-16;
  @apply flex;
  @apply h-6 mb-1;
}

</style>
