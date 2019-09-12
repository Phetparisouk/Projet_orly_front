import Vue from 'vue'
import Router from 'vue-router'
import SlideContinents from '@/components/SlideContinents'
import FormVoyage from '@/components/FormVoyage'
import FormNotFound from '@/components/FormNotFound'
import FormCriteres from '@/components/FormCriteres'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SlideContinents',
      component: SlideContinents
    },
    {
      path: '/formvoyage',
      name: 'formvoyage',
      component: FormVoyage,
      props: true
    },
    {
      path: '/formnotfound',
      name: 'formnotfound',
      component: FormNotFound,
    },
    {
      path: '/formcriteres',
      name: 'formcriteres',
      component: FormCriteres,
      props: true
    }
  ]
})
