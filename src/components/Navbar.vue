<template lang="html">
  <div>
    <b-navbar toggleable type="inverse" variant="success">

     <b-nav-toggle target="nav_collapse"></b-nav-toggle>

     <b-link class="navbar-brand" href="/#/">
       <span>To-Read</span>
     </b-link>

     <b-collapse is-nav id="nav_collapse">

       <b-nav is-nav-bar pills>
         <b-nav-item href='#/login'>Login</b-nav-item>
         <b-nav-item href="#/about">About</b-nav-item>
         <b-nav-item href="#/addbook">Add Book</b-nav-item>
         <b-nav-item href="#/register">Register</b-nav-item>
       </b-nav>

       <b-nav is-nav-bar class="ml-auto">

         <!-- Navbar dropdowns -->

         <b-nav-item-dropdown right-alignment id="dropdown">

           <!-- Using text slot -->
           <template slot="text">
             <span style="font-weight: bold;">User</span>
           </template>

           <b-dropdown-item to="#">Profile</b-dropdown-item>
           <b-dropdown-item to="/#/" v-on:click="logout()">Logout</b-dropdown-item>
         </b-nav-item-dropdown>

       </b-nav>
     </b-collapse>
   </b-navbar>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'Navbar',

  methods: {
    logout() {
      auth.logout(this)
    }
  }
}
</script>

<style lang="css">

</style>
