import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Rooms from '@/components/Rooms'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/rooms', name: 'rooms', component: Rooms}
  ]
})
