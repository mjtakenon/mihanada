<template>
  <template v-for="newsContent of newsContents" >
      <a v-if="newsContent.link !== undefined" :href="newsContent.link" :class="newsContent.style">
        {{ newsContent.text }}
      </a>
    <span v-else :class="newsContent.style">
      {{ newsContent.text }}
    </span>
  </template>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {NewsContents} from "../../scripts/entity/NewsContents.ts";

export default defineComponent({
  setup() {},
  mounted() {},
  computed: {},
  props: {
    newsContents: {
      require: true,
      default: [],
      type: Array as PropType<NewsContents[]>
    }
  },
})
</script>

<style scoped lang="scss">
</style>
