<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <h1>Login</h1>
      Username: <input class="form-control" v-model="credentials.username" id="username"><br>
      Password: <input type="password" class="form-control" v-model="credentials.password" id="password"><br>
      <button class="btn btn-primary" v-on:click="submit()">Login</button>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'login',

  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {

    submit() {
      let credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }

       auth.login(this, credentials, 'menu')

       this.credentials.username = ''
       this.credentials.password = ''

    },


    hello() {
      console.log("hello")
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
