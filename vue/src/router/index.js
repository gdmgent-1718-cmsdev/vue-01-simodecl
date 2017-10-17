import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/ReadArticle'
import Create from '@/components/CreateArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReadArticle',
      component: Read
    },
    {
      path: '/create',
      name: 'CreateArticle',
      component: Create
    }
  ]
})
