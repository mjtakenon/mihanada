import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Icon } from '@iconify/vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

library.add(fas, far, fab)

let app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Icon', Icon)
app.component('carousel', Carousel)
app.component('slide', Slide)
app.component('pagination', Pagination)
app.component('navigation', Navigation)

app.mount('#app')
