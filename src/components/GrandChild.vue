<template>
  <div class="box">
    <p class="title">GrandChild</p>
    <p>{{username}}</p>
    <p class="coltroll">
      <button @click="logout" class="button is-danger">LogOut</button>

    </p>
    <!-- <p>Vuex Username: {{vuexUsername}}</p>
    <p>Vuex Amount : {{vuexAmount}}</p> -->
    <p>Vuex Username: {{usernames}}</p>
    <p class="coltroll">
      <button @click="mutateAmount(100)" class="button">Reset Amount</button>
    </p>
    <p>{{amount}}</p>

    <pre>{{customers}}</pre>
    <button class="button" @click="getCustomers()">Get Customer</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import child from './Child.vue'

const mapStateA = { amount() {} }
const computed = { ...mapStateA, xxx() {} }

console.log(computed)
export default {
    props: ['username'],
    methods: {
        logout() {
            console.log('logOut')
            this.$emit('logout')
        },
        ...mapMutations(['mutateAmount']),
        ...mapActions(['getCustomers'])
    },
    // computed: {
    //     vuexUsername() {
    //         return this.$store.state.username
    //     },
    //     vuexAmount() {
    //         return this.$store.getters.usAmount
    //     }
    // }
    computed: {
        ...mapState(['amount', 'usernames', 'customers']),
        ...mapGetters(['usAmount']),
        xxx() {}
    }
}
</script>

