import Home from './page/Home.vue'
import About from './page/About.vue'
import Product from './page/Product.vue'
import Form from './page/Form.vue'
import PageNotFound from './page/PageNotFound.vue'
import Customer from './page/Customer.vue'
import CustomerProfile from './page/CustomerProfile.vue'
import Pagination from './page/Pagination.vue'
import Search from './page/Search.vue'
import Column from './page/Column.vue'
import Nested from './page/Nested.vue'
import Vuex from './page/Vuex.vue'

export default [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Product', component: Product },
  { path: '/Form', component: Form },
  { path: '/Customer', component: Customer },
  { path: '*', component: PageNotFound },
  { path: '/Customer/:id', component: CustomerProfile },
  { path: '/Pagination', component: Pagination },
  { path: '/Search', component: Search },
  { path: '/Column', component: Column },
  { path: '/Nested', component: Nested },
  { path: '/Vuex', component: Vuex }
]