<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="test">Make Swal</button>
  </div>
</template>

<script>
import { SwalService } from '@/services/SwalService'
// @ is an alias to /src
export default {
  name: 'home',
  components: {},
  methods: {
    getSomething () {
      this.$api.get()
    },
    test () {
      SwalService.swalTest('hi')
    }
  }
}
</script>
