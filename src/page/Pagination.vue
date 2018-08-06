<template>
<div>
  <p class="title">Pagination</p>
  
  <p>Count Total : {{head}}</p>
  <!-- <p>{{customers}}</p> -->
  <u>
<li :key="p" v-for="p in totalPage">
    <router-link :class="isCurentPage(p)" :to="`/pagination?_limit=${limit}&page=${p}`">{{p}}
      <!-- pagination-link -->
    </router-link>
  </li>
  </u>
  
  <table class="table is-bordered"> 
<tr :key="c.id" v-for="c in customers">
  <td>{{c.id}}</td>
  <td>{{c.firstName}}</td>
</tr>
  </table>
</div>
  
  
</template>

<script>
import axios from 'axios'
export default {
    watch: {
        '$route.query'() {
            console.log(this.$route.query)
            const { _limit = 5, page = 1 } = this.$route.query
            this.setYuorName(_limit, page)
        }
    },
    data() {
        return {
            customers: {},
            head: 0,
            totalPage: 0,
            page: 1,
            limit: 5
        }
    },
    mounted() {
        const { _limit = 5, page = 1 } = this.$route.query
        this.setYuorName(_limit, page)
    },
    methods: {
        async setYuorName(limit, page) {
            this.page = page
            this.limit = limit

            const { data: customer, headers } = await axios.get(
                `http://localhost:3000/customers?_limit=${limit}&_page=${page}`
            )
            // console.log(res);
            this.customers = customer
            this.head = headers['x-total-count']
            this.totalPage = Math.ceil(this.head / limit)
            console.log(headers['x-total-count'])
            console.log(this.totalPage)

            // console.log(this.customers);
        },
        isCurentPage(p) {
            if (p == this.page) {
                return `pagination-link is-current`
            } else {
                return `pagination-link`
            }
        }
    }
}
</script>
