<template>
  <div class="discography">
    <DiscographyJoint></DiscographyJoint>
    <DiscographyText></DiscographyText>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DiscographyText from "./DiscographyText.vue";
import DiscographyJoint from "./DiscographyJoint.vue";

export default defineComponent({
  components: {DiscographyJoint, DiscographyText},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.discography {
  background-color: color.$mihanada-dark-1;
}

</style>
