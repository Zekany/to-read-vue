<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group" v-if="this.user.authenticated = true">
      <h1>Add book</h1>
      Title: <input class="form-control" v-model="book.title" id="title"><br>
      Author: <input class="form-control" v-model="book.author" id="author"><br>
      Priority: <select name="priority" form="priority-form" v-model="book.priority" autocomplete="off">
                  <option value="High">High</option>
                  <option value="Medium" selected="selected">Medium</option>
                  <option value="Low">Low</option>
                </select> <br>


      <button class="btn btn-primary" v-on:click="addBook()">Add Book</button>
    </div>
    <div class="form-group" v-else>
      <h2>You're not logged in</h2>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'addBook',

  data () {
    return {
      book: {
        title: '',
        author: '',
        priority: 'Medium'
      },
      error: ''
    }
  },

  methods: {

    addBook() {
      let book = {
        title: this.book.title,
        author: this.book.author,
        priority: this.book.priority
      }

       auth.addBook(this, book)
       console.log(book)

       this.book.title = ''
       this.book.author = ''
       this.book.priority = 'Medium'

    }

  }
}
</script>

<style>

</style>
