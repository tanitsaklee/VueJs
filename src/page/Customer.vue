<template>
  <div class="box">
    <h3 class="title">Customer Page</h3>
    <button class="button is-danger" @click="getCustomer()">Get Json</button>
    <br>
    
    <table class="table">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <div :key="c.id" v-for="c in customers">
      <tr>
        <td><router-link :to="`/customer/${c.id}`">{{c.id}}</router-link></td>
        <td>{{c.firstName}}</td>
        <td>{{c.age}}</td>
      </tr>
      </div>
    </table>
    
    <!-- <p>Name: {{c.firstName}} Age: {{c.age}}  Gender:{{c.gender}} <img :src="getGender(c.gender)" class="image is-64x64"></p>  -->
    
  </div>
</template>
<script>
import axios from "axios";
import male from "../images/male.png";
import female from "../images/female.png";
export default {
  data() {
    return {
      customers: [],
      img: male
    };
  },
  methods: {
    getCustomer() {
      axios.get("http://localhost:3000/customers").then(res => {
        console.log(res);
        this.customers = res.data;
      });
      console.log("ok");
    },
    getGender(m) {
      return m == "m" ? male : female;
    }
  }
};
</script>
