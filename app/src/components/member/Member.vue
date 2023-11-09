<template>
  <div class="member">
    <MemberJoint></MemberJoint>
    <MemberText></MemberText>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MemberJoint from "./MemberJoint.vue";
import MemberText from "./MemberText.vue";

export default defineComponent({
  components: {MemberText, MemberJoint},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.member {
}
</style>
