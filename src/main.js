import Vue from 'vue'
import VueRouter from 'vue-router'
import validate from 'vee-validate'
import dictionary from './dictionary'
import store from './store'

Vue.use(VueRouter)
Vue.use(validate, {
  dictionary: dictionary,
  locale: 'th'
})
import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes

})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
