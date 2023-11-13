<template>
  <div class="hero_video">
    <div class="video"></div>
    <div class="overlay">
      <canvas id="canvas"></canvas>
      <div id="wrapper">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Ripple} from "../../scripts/animation/Ripple.ts";

export default defineComponent({
  components: {},
  setup() {},
  mounted() {
    const canvas: HTMLCanvasElement = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    const ripples = [];

    canvas.style.filter = `blur(8px)`;
    canvas.width = window.visualViewport.width;
    canvas.height = window.visualViewport.height;

    const addRipple = (e) => {
      const x = e.clientX + window.visualViewport.pageLeft;
      const y = e.clientY + window.visualViewport.pageTop;
      ripples.unshift(new Ripple(x, y, 2, context));
    };

    const animation = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const length = ripples.length;
      for (let i = length - 1; i >= 0; i -= 1) {
        const r = ripples[i];

        r.update();
        r.draw();

        if (r.opacity <= 0) {
          ripples[i] = null;
          delete ripples[i];
          ripples.pop();
        }
      }

      window.requestAnimationFrame(animation);
    };

    animation();
    canvas.addEventListener('mousemove', addRipple);
  },
  computed: {},
})
</script>

<style scoped lang="scss">

.hero_video {}

.video {
  @apply w-full min-h-[100lvh];
  background: url(/img/hero_video_mid.gif) center/cover;
}

.overlay {
  @apply absolute w-full min-h-[100lvh] top-0 left-0;
  @apply backdrop-blur-sm;
  background-color: rgba(0, 0, 0, 0.5);
}

#canvas {
  @apply absolute w-full min-h-[100lvh] top-0 left-0;
  @apply blur;
}

#wrapper {
  pointer-events: none;
}
</style>
