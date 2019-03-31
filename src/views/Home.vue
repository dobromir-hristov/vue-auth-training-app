<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {},
  methods: {
    getSomething () {
      this.$api.get()
    }
  }
}
</script>
