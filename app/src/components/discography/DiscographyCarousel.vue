<template>
  <div class="discography_carousel">
    <carousel :items-to-show="2" :wrap-around="true">
      <slide v-for="slide in 4" :key="slide">
        <div style="height:100px; width:100px; background-color:white;">
          {{ slide }}
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DiscographyText from "./DiscographyText.vue";

export default defineComponent({
  components: {DiscographyText},
  setup() {},
  computed: {},
})
</script>

<style scoped lang="scss">
@use "../../styles/color";

.discography_joint {

}

.joint_parallelogram {
  @apply w-full h-16 sm:h-24 xl:h-32;
  background-color: color.$mihanada-dark-0;
  clip-path: polygon(0 0, 100% 65%, 100% 100%, 0 35%);
}

.joint_triangle {
  @apply absolute;
  @apply w-full h-16 sm:h-24 xl:h-32;
  background-color: color.$mihanada;
  clip-path: polygon(0 0, 100% 65%, 100% 0);
}

</style>
