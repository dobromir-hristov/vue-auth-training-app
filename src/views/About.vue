<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="runNotify()">Click</button>
  </div>
</template>

<script>
export default {
 data() {
   return {

   }
 },
 methods: {
   runNotify() {
     this.$notify.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Cool'
    })
   }
 }
}
</script>

<style>

</style>

