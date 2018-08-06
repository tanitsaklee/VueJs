<template>
  <div class="box">
    <p class="title">Nested</p>

    <input type="text" class="input" v-model="username">
    <p>{{username}}</p>
    <p>Vuex Username: {{vuexUsername}}</p>
    <parent :username="username" @logout="logout"></parent>
  </div>
</template>

<script>
import Parent from '../components/Parent.vue'

export default {
    data() {
        return {
            username: ''
        }
    },
    components: {
        parent: Parent
    },
    methods: {
        logout() {
            // console.log('Nested')
            // this.$emit('')
            this.username = ''
        }
    },
    computed: {
        vuexUsername() {
            return this.$store.state.username
        }
    }
}
</script>
