<template>
  <div class="box">
    <p class="title">Parent</p>
    <p>{{username}}</p>
    <child :username="username" @logout="logout"></child>
  </div>
</template>
<script>
import child from './Child'
export default {
    props: ['username'],
    components: {
        child: child
    },
    methods: {
        logout() {
            console.log('Parent')
            this.$emit('logout')
        }
    }
}
</script>
