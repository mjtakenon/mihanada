<template>
  <div class="app">
    <Hero></Hero>
    <News></News>
    <Discography></Discography>
    <Member></Member>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Hero from './components/hero/Hero.vue'
import News from './components/news/News.vue'
import Discography from './components/discography/Discography.vue'
import Member from './components/member/Member.vue'
import Footer from './components/footer/Footer.vue'

export default defineComponent({
  components: {
    Hero,
    News,
    Discography,
    Member,
    Footer,
  },
  setup() {
  },
  computed: {
  },
  props: {
  }
})
</script>

<style scoped lang="scss">
</style>
