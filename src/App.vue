<template>
  <section class="section">
      <div class="container">
        <navbar-bar/>
        <router-view/>
      </div>    
  </section>
</template>

<script>
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
export default {
  data() {
    return {
      productIds: [1, 2, 3, 4, 5]
    };
  },
  methods: {},
  components: {
    "navbar-bar": Navbar
  }
};
</script>
