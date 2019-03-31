<template>
  <div class="Login">
    <div v-if="isLoading">..Is Loading</div>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <form @submit.prevent="submit">
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
      isLoading: false,
      form: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submit () {
      this.isLoading = true
      this.errorMessage = ''

      this.login(this.form)
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.errorMessage = error.response.data.error
        })
    }
  }
}
</script>

<style lang='scss'>

</style>
