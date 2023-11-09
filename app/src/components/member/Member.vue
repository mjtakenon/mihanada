<template>
  <div class="member">
    <MemberJoint></MemberJoint>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MemberJoint from "./MemberJoint.vue";

export default defineComponent({
  components: {MemberJoint},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.member {
}
</style>
