<template>
  <div class="box">
    <h3 class="title">Column</h3>
    <button class="button is-danger" @click="getCustomer()">Get Json</button>
    <br>

    <input type="radio" name="gender" value="M" v-model="gender"> Male
          <input type="radio" name="gender" value="F"  v-model="gender"> Female

     <div class="columns" :key="idx" v-for="(row,idx) in columnCustomers">
      <div class="column" :key="ix" v-for="(r,ix) in row">
          <div class="box">{{r.firstName}}
            <figure class="image is-32x32"><img :src="getgender(r.gender)"></figure>
          </div>
          
    </div>
    </div>
    
    <!-- <p>Name: {{c.firstName}} Age: {{c.age}}  Gender:{{c.gender}} <img :src="getGender(c.gender)" class="image is-64x64"></p>  -->
    
  </div>
</template>
<script>
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'
import { chunk } from 'lodash'
export default {
    data() {
        return {
            customers: [],
            img: '',
            gender: 'm'
        }
    },
    methods: {
        async getCustomer() {
            const res = await axios.get(`http://localhost:3000/customers`)
            this.customers = res.data
        },
        getgender(m) {
            return m == 'M' ? male : female
        }
    },
    computed: {
        columnCustomers() {
            return chunk(this.genderCustomer, 3)
        },
        genderCustomer() {
            return this.customers.filter(c => {
                return c.gender == this.gender
            })
        }
    }
}
</script>
