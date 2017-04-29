<template lang="html">
  <div class="alert alert-danger" v-if="error">
    <p>{{ error }}</p>
  </div>
  <div class="form-group">
    <h1>Get books</h1>
    Username: <input class="form-control" v-model="username" id="username"><br>
    <button class="btn btn-primary" v-on:click="getBooks()">Login</button> <br>
    <!--<button class="btn btn-danger" v-on:click="logout()">Logout</button>-->
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'login',

  data () {
    return {
      username: '',
      error: ''
    }
  },

  methods: {

    getBooks() {

      let username: this.username,
      
       auth.getBooks(this, username)

       this.username = ''

    },

  }

}
</script>

<style lang="css">
</style>
