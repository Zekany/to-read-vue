<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <loginform></loginform>
  </div>
</template>

<script>
import auth from '../auth'
import Loginform from './Loginform.vue'
export default {
  components: {
    loginform: Loginform
  },
  name: 'login',

  data () {
    return {

      error: ''
    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
