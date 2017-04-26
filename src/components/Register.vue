<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <h3>Register</h3><br>
      Username: <input class="form-control" v-model="credentials.username" id="username"><br>
      Password: <input type="password" class="form-control" v-model="credentials.password" id="password"><br>
      <button class="btn btn-primary" v-on:click="register()">Submit</button>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
  export default {
    name: 'Register',

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
      register() {
        let credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        
         auth.register(this, credentials)

         this.credentials.username = ''
         this.credentials.password = ''

      }
      }
    }

</script>
