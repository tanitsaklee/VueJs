import Vue from 'vue'
import Vuex from 'vuex'
import axioss from "axios";
import males from "./images/male.png";
import females from "./images/female.png";

Vue.use(Vuex)

const foo = { foo: 'FOO' }
const bar = { ...foo, bar: 'BAR', foo: 'ZAP' }
console.log(bar)
export default new Vuex.Store({
  state: {
    usernames: 'admin',
    amount: 100,
    customers: [],
    loading: false
  },
  mutations: {
    mutateAmount(state) {
      state.amount += 50
    },
    mutateCustomer(state, value) {
      state.customers = value
    }
  },
  actions: {
    getCustomers(context) {
      try {
        //context.commit('loading', true)
        context.commit('mutateCustomer', [1, 2, 3, 4, 5])
        //context.commit('loading', false)
      } catch (e) {
        //context.commit('loading', false)
      }
    },
    getCustomerbtn(context) {
      axioss.get("http://localhost:3000/customers").then(res => {
        console.log(res);
        // this.customers = res.data;
        context.commit('mutateCustomer', res.data)
      });
      console.log("ok");
    }
  },
  getters: {
    usAmount(state) {
      return state.amount / 30
    },
    femaleCustomers(state) {
      return state.customers.filter(c => {
        return c.gender = 'F'
      })
    },
    maleCustomers(state) {
      return state.customers.filter(c => {
        return c.gender = 'M'
      })
    },
    customerName(state) {
      return state.customers.map(c => {
        return `${c.firstName} ${c.lastName}`
      })
    }
  },
})