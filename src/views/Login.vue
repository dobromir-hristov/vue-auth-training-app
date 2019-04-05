<template>
  <div class="Login">
    <div v-if="isLoading">..Is Loading</div>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <form @submit.prevent="submit" v-if="showForm">
      <input type="text" v-model="form.username">
      <input type="password" v-model="form.password">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      showForm: true,
      isLoading: false,
      form: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    // extract the login action from Vuex to our component to be used as a method
    ...mapActions([
      'login'
    ]),
    submit () {
      this.isLoading = true
      this.errorMessage = ''

      // calls the login action and passes the form object to it
      this.login(this.form)
        .then((response) => {
          // when its done we set isLoading to false.
          this.isLoading = false
          this.showForm = false
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          // if there was an error in the API, we show it.
          this.isLoading = false
          this.errorMessage = error.response.data.error
        })
    }
  }
}
</script>

<style lang='scss'>

</style>
