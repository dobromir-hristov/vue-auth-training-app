<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="tryIt">Click</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
 data() {
   return {

   }
 },
 methods: {
    ...mapActions([
    'tryIt'
  ]),
 }
}
</script>

<style>

</style>

