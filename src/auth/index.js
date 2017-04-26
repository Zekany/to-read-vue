const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/login'
const REGISTER_URL = API_URL + 'api/register'
const BOOK_URL = API_URL + 'api/addbook'

export default {
  user: {
    authenticated: false
  },

  // when called, "context" will be "this", creds will be the email and the password,
  // and if there's a redirect passed, user will be redirected there
  async login (context, creds, redirect) {
    try {
      const response = await context.$http.post(LOGIN_URL, creds)
      const token = response.body
      console.log('token', token)
      //localStorage.setItem('id_token', token)

      return token
    } catch (e) {
      throw e
    }


  },

  async asyncLogout(context) {
    try {
      //console.log(this.user)
      //console.log(localStorage.getItem('id_token'))
      //localStorage.removeItem('id_token')
      //this.user.authenticated = false
      // this won't print anything either
      console.log(this.user)
      //context.$router.push('/')
    } catch (err) {
      console.error(err)
    }
  },

  async register (context, creds) {
    try {
      let data = await context.$http.post(REGISTER_URL, creds)
      console.log(data)
      if (data.status === 200) {
        console.log('User succesfully added')
      } else {
        console.log('An error has occured')
      }
    } catch (err) {
      console.error(err)
    }
  },

  async addBook (context, book) {
    try {
      let data = await context.$http.post(BOOK_URL, book)
      console.log(book)
      if (data.status === 200) {
        console.log('Book succesfully added')
      } else {
        console.log('An error has occured')
      }
    } catch (err) {
      console.error(err)
    }
  }

}
