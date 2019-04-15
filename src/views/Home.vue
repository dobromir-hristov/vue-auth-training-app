<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="button-holder">
      <button class="btn success" @click="showSucces">Succes</button>
      <button class="btn error" @click="showError">Error</button>
      <button class="btn warning" @click="showWarning">Warning</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    getSomething () {
      this.$api.get()
    },
    showSucces () {
      this.$notify.success(this.$store.state.userName)
    },
    showError () {
      this.$notify.error(this.$store.state.userName)
    },
    showWarning () {
      this.$notify.warning(this.$store.state.userName)
    }
  }
}
</script>

<style scoped>
  .btn {
    width: 75px;
    height: 25px;
    margin: 15px;
  }

  .success {
    color: #2c3e50;
    font-weight: 900;
    background-color: lightgreen;
  }

  .error {
    color: antiquewhite;
    font-weight: 900;
    background-color: coral;
  }

  .warning {
    color: #2c3e50;
    font-weight: 900;
    background-color: yellow;
  }
</style>
