<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <h1>Add book</h1>
      Title: <input class="form-control" v-model="book.title" id="title"><br>
      Author: <input class="form-control" v-model="book.author" id="author"><br>
      Priority: <select name="priority" form="priority-form" v-model="book.priority" autocomplete="off">
                  <option value="High">High</option>
                  <option value="Medium" selected="selected">Medium</option>
                  <option value="Low">Low</option>
                </select> <br>


      <button class="btn btn-primary" v-on:click="submit()">Add Book</button>
    </div>
  </div>
</template>

<script>
//import auth from '../auth'
export default {
  name: 'book',

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

    submit() {
      let book = {
        title: this.book.title,
        author: this.book.author,
        priority: this.book.priority
      }


       console.log(book)

       this.book.title = ''
       this.book.author = ''
       this.book.priority = ''

    },
    hello() {
      console.log("Hello")
    }

  }
}
</script>

<style>

</style>
