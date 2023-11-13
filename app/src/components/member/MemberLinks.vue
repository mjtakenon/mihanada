<template>
  <div class="member_links">
    <template v-for="link of Array.from(links).reverse()">
      <a :href="link.url"><Icon :class="linkClass(link)" :icon="link.icon"></Icon></a>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Link} from "../../scripts/entity/Link.ts";

export default defineComponent({
  components: {},
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

.member_links {
  @apply flex;
  @apply w-fit;
  @apply ml-auto py-1 md:py-2 px-6 md:px-12;
  background-color: color.$mihanada;
  @apply rounded-full;
}

.link {
  @apply w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10;
  @apply mx-2;
  color: color.$background;
}

.niconico {
  @apply w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9;
}

</style>
