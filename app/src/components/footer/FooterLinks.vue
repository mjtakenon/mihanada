<template>
  <div class="footer_links">
    <div v-for="link of Array.from(links).reverse()">
      <a :href="link.url"><Icon :class="['link']" :icon="link.icon"></Icon></a>
    </div>
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

.footer_links {
  @apply flex;
  @apply w-fit;
  @apply ml-auto py-1 md:py-2 px-4 sm:px-8 md:px-10;
}

.link {
  @apply w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14;
  @apply mx-2 sm:mx-3 lg:mx-4;
  color: color.$background;
}

.niconico {
  @apply w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12;
}

</style>
