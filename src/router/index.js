import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Player from '@/components/Player'
import VueGlide from 'vue-glide-js'



Vue.use(Router)
Vue.use(VueGlide)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/player/:url",
      name:"Player",
      component:Player
    }
  ]
})
