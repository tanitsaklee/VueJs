<template>
  <div class="box">
    <p class="title">Vuex</p>

    <button class="button" @click="getCustomerbtn()">Call Json</button>
    <!-- <p>{{customers}}</p> -->
    <table class="table table is-bordered">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Last</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      <tr :key="c.id" v-for="c in customers">
        <td>{{c.id}}</td>
        <td>{{c.firstName}}</td>
        <td>{{c.lastName}}</td>
        <td>{{c.age}}</td>
        <td><figure class="image is-32x32"><img :src="getgender(c.gender)"></figure></td>
      </tr>
    </table>
    <!-- <pre>{{femaleCustomers}}</pre> -->
    <pre>{{maleCustomers}}</pre>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import male from '../images/male.png'
import female from '../images/female.png'
export default {
    methods: {
        ...mapActions(['getCustomerbtn']),
        getgender(m) {
            return m == 'M' ? male : female
        }
    },
    computed: {
        ...mapState(['customers']),
        ...mapGetters(['femaleCustomers', 'maleCustomers'])
    }
}
</script>
