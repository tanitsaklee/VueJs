<template>
  <div class="box">
    <p class="title">Product</p>
    <p class="controll">
      <button class="button" @click="getProduct">Get Product</button>
    </p>
    <!-- <pre>{{product}}</pre> -->
    <input type="text" class="input" name="product_name_en" placeholder="Product Name" v-model="product.product_name_en">
    <input type="text" class="input" name="Price" placeholder="Price" v-model="product.price">
    <button class="button" @click="postProduct">Save</button>
    <table class="table is-bordered">
      <tr>
        <th>ID</th>
        <th>product_name_en</th>
        <th>Price</th>
      </tr>
      <tr :key="n.id" v-for="n in products">
        <td>
          <a @click="deleteProduct(n.id)">{{n.id}}</a>
        </td>
        <td>{{n.product_name_en}}</td>
        <td>{{n.price}}</td>
      </tr>
    </table>

    <hr>
    <input type="text" class="input" v-model="user.username" placeholder="username">
    <input type="text" class="input" v-model="user.password" placeholder="password">
    <p class="controll">
      <button class="button" @click="postlogin()"> SignIn</button>
    </p>
    <hr>
    <pre>{{token}}</pre>

  </div>

</template>
<script>
  // import axios from 'axios'
  import axios from '../axios.js'
  export default {
    mounted() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
      }
    },
    data() {
      return {
        products: [],
        product: {},
        user: {},
        token: ''
      }
    },
    methods: {
      async getProduct() {
        const { data } = await axios.get('http://localhost:3000/api/product?price=500')
        this.products = data

      },
      async postProduct() {
        // console.log(this.product)
        await axios.post('http://localhost:3000/api/product', this.product)

      },
      async deleteProduct(id) {
        await axios.delete(`http://localhost:3000/api/product/${id}`)
        //console.log(id)
        this.getProduct()
      },
      async postlogin() {
        const { data } = await axios.post(`/users/login`, this.user)
        this.token = data.token
        localStorage.setItem('token', data.token)
      }
    }
  }
</script>