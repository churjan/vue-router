import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Forum from '@/components/Forum'
import hot from '@/components/News_hot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news/:id',
      name: 'news',
      component: News,
      children: [
        {path: 'hot', component: hot}
      ]
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    }
  ]
})
