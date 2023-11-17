<template>
  <div id="discography">
    <DiscographyJoint></DiscographyJoint>
    <DiscographyText></DiscographyText>
    <DiscographyCarousel></DiscographyCarousel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DiscographyText from "./DiscographyText.vue";
import DiscographyJoint from "./DiscographyJoint.vue";
import DiscographyCarousel from "./DiscographyCarousel.vue";

export default defineComponent({
  components: {DiscographyCarousel, DiscographyJoint, DiscographyText},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

#discography {
  background-color: color.$mihanada-dark-1;
}

</style>
