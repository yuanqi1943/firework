import Phone from '@/pages/phone/phone'
import Index from '@/pages/phone/index/index'

export default [
  {
    path: '/phone',
    component: Phone,
    children: [
      {
        path: '',
        name: 'phone.index',
        component: Index
      }
    ]
  }
]
