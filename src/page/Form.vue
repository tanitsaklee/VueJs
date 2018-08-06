<template>
  <div class="box">
    <h3 class="title">Form Page</h3>
    <label>Name</label>
    <div class="control">
      <input type="text" :class="cssClass('name')" v-model="customer.name" name="name" v-validate="'required|min:5'">
    </div>
    <p class="help is-danger">{{errors.first('name')}}</p>
    <p class="help is-danger">{{errors.has('name')}}</p>
    

    <label>lastName</label>
    <div class="control">
      <input type="text" :class="cssClass('last')" v-model="customer.lastname" name="last" v-validate="'required|min:5'">
    </div>
    <p class="help is-danger">{{errors.first('last')}}</p>
    <p class="help is-danger">{{errors.has('last')}}</p>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      customer: {}
    };
  },
  methods:{
    cssClass(field){
      return this.errors.has(field)?'input is-danger':'input'
      // return `input${this.errors.has(field)?'is-danger':''}`
    }
  }
};
</script>



