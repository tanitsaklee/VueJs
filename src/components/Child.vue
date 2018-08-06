<template>
  <div class="box">
    <p class="title">Child</p>
    <p>{{username}}</p>
    <GrandChild :username="username" @logout="logout" />
  </div>
</template>
<script>
import GrandChild from './GrandChild'
export default {
    props: ['username'],
    components: {
        GrandChild: GrandChild
    },
    methods: {
        logout() {
            console.log('emit')
            this.$emit('logout')
        }
    }
}
</script>
