<template>
  <div id="news">
    <NewsContainer></NewsContainer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NewsContainer from "./NewsContainer.vue";

export default defineComponent({
  components: {
    NewsContainer
  },
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

#news {
  @apply flex justify-center;
  background-color: color.$mihanada;
}
</style>
