<template>
  <div>
    <p class="title">Search</p>
    <input @keyup="searchCustomer()" type="text" class="input" v-model="searchBy">

<table class="table is-bordered">
  <tr>
    <th>name</th>
    <th>lastname</th>
    <th>Age</th>
    <th>Gender</th>
  </tr>
  <tr :key="n" v-for="n in customers">
    <td>{{n.firstName}}</td>
    <td>{{n.lastName}}</td>
    <td>{{n.age}}</td>
    <td>{{n.gender}}</td>
  </tr>
</table>
  </div>
</template>

<script>
import { get } from 'axios'
import { debounce } from 'lodash'
export default {
    data() {
        return {
            searchBy: '',
            customers: {}
        }
    },
    methods: {
        async searchCustomer() {
            // console.log(this.searchBy)
            const { data } = await get(
                `http://localhost:3000/customers?q=${this.searchBy}`
            )
            this.customers = data
        }
    },
    created() {
        this.searchCustomer = debounce(this.searchCustomer, 600)
    }
}
</script>
