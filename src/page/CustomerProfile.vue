<template>
  <div>
    <h3 class="title">Customer Profile</h3>
    <!-- <p>{{customers}}</p> -->
    <div class="columns">
  <div class="column">firstName</div>
  <div class="column">lastName</div>
  <div class="column">age</div>
  <div class="column">company</div>
  <div class="column">email</div>
</div>
    <div class="columns">
  <div class="column">{{customers.firstName}}</div>
  <div class="column">{{customers.lastName}}</div>
  <div class="column">{{customers.age}}</div>
  <div class="column">{{customers.company}}</div>
  <div class="column">{{customers.email}}</div>
</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      customers: {}
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.setYuorName(this.$route.params.id);
  },
  methods: {
    setYuorName(id) {
      axios.get(`http://localhost:3000/customers/${id}`).then(res => {
        console.log(res);
        this.customers = res.data;
      });
      console.log(this.customers);
    }
  }
};
</script>
