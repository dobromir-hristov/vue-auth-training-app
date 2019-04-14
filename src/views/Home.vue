<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="test">Make Swal</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    getSomething () {
      this.$api.get()
    },
    test () {
      this.$swal.swalTest('ferrari')
    }
  }
}
</script>
