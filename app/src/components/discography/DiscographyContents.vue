<template>
  <div class="discography_contents">
    <img class="image" :src="imagePath" alt="">
    <div class="no">
      {{no}}{{albumOrdinalNumber(no)}} Album
    </div>
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <div class="links">
      <div v-for="(link, idx) of links.reverse()">
        <a :href="link.url"><Icon :class="linkClass(link)" :icon="link.icon"></Icon></a>
      </div>
    </div>
    <div class="eventName">{{ eventName }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Link} from "../../scripts/entity/Link.ts";

export default defineComponent({
  components: {},
  setup() {},
  computed: {
    albumOrdinalNumber() {
      return (num: Number) => {
        if (num % 100 >= 10 && num % 100 < 20) {
          return "th"
        }
        switch (num % 10) {
          case 1: return "st"
          case 2: return "nd"
          case 3: return "rd"
          default: return "th"
        }
      }
    },
    linkClass() {
      return (link: Link) => { return {
        'link': true,
        'niconico': link.icon === 'simple-icons:niconico',
      }}
    }
  },
  props: {
    no: {
      require: true,
      default: 0,
      type: Number,
    },
    title: {
      require: true,
      default: "",
      type: String,
    },
    description: {
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

.discography_contents {
  @apply max-w-lg;
  @apply mx-5 px-5 pt-5 pb-2;
  @apply rounded-2xl;
  background-color: color.$background;

  @apply text-left;

  > div {
    line-height: 1.3;
  }
}

.image {
  @apply mb-2;
}

.no {
  @apply mx-2;
  @apply text-sm;
  color: color.$text-gray;
  content: "";
  display: inline-block;
}

.title {
  @apply mx-2;
  @apply text-xl;
  color: color.$text-black;
}

.description {
  @apply mx-2;
  @apply text-sm;
  color: color.$text-black;
  content: "";
  display: inline-block;
}

.links {
  @apply flex flex-row-reverse flex-wrap-reverse;
  @apply h-6;
}

.link {
  @apply w-6 h-6;
  @apply ml-2;
  color: color.$text-black;
}

.niconico {
  @apply w-5 h-5;
}

.eventName {
  @apply ml-2 mr-0;
  @apply text-xs text-right;
  color: color.$mihanada-dark-2;
}

</style>
