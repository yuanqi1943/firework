import Pc from '@/pages/pc/pc'
import Index from '@/pages/pc/index/index'
import About from '@/pages/pc/about/about'
import Products from '@/pages/pc/products/products'
import News from '@/pages/pc/news/news'
import Contact from '@/pages/pc/contact/contact'

export default [
  {
    path: '/pc',
    component: Pc,
    children: [
      {
        path: '/',
        name: 'pc.index',
        component: Index
      },{
        path:'/pc/about/:a',
        name: 'pc.about',
        // query:['a'],
        component: About
      },{
        path:'/pc/products',
        name: 'pc.products',
        component: Products
      },{
        path:'/pc/news',
        name: 'pc.news',
        component: News
      },{
        path:'/pc/contact',
        name: 'pc.contact',
        component: Contact
      }
      
    ]
  }
]
