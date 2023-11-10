<template>
  <div class="member_name">
    <div class="name_container">
      <div class="name">{{ name }}</div>
      <div class="id">{{ id }}</div>
    </div>
    <div class="line"></div>
    <div class="bio">{{ bio }}</div>
    <MemberLinks
      class="links"
      :links="links"
    ></MemberLinks>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Link} from "../../scripts/entity/Link.ts";
import MemberLinks from "./MemberLinks.vue";

export default defineComponent({
  components: {MemberLinks},
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

.name_container {
  @apply flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.name {
  @apply text-2xl sm:text-4xl xl:text-5xl;
  @apply mb-1;
  color: color.$mihanada;
}

.id {
  @apply flex-auto;
  @apply text-xs sm:text-sm xl:text-base;
  color: color.$mihanada;
  text-align: right;
}

.line {
  @apply w-full h-[2px] sm:h-[4px];
  background-color: color.$mihanada;
}

.bio {
  @apply m-2 sm:m-3 xl:m-4;
  @apply text-xs sm:text-sm xl:text-base;
  color: color.$text-black;
}

.links {
  @apply lg:hidden;
}

</style>
