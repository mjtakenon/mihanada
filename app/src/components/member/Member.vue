<template>
  <div class="member">
    <MemberJoint></MemberJoint>
    <MemberText></MemberText>
    <MemberContainer></MemberContainer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MemberJoint from "./MemberJoint.vue";
import MemberText from "./MemberText.vue";
import MemberContainer from "./MemberContainer.vue";

export default defineComponent({
  components: {MemberContainer, MemberText, MemberJoint},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.member {
}
</style>
