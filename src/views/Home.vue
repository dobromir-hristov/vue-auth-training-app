<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    getSomething () {
      this.$api.get()
    }
  }
}
</script>
