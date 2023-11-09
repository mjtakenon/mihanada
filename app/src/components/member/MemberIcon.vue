<template>
  <div class="member_icon">
    <img class="image" :src="imagePath" alt="">
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Link} from "../../scripts/entity/Link.ts";

export default defineComponent({
  components: {},
  setup() {},
  computed: {},
  props: {
    imagePath: {
      require: true,
      default: "",
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

//.member_icon {
//  @apply w-24 sm:w-32 xl:w-64;
//}

</style>
