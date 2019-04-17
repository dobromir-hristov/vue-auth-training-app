import Swal from 'sweetalert2'

export default {

  //  Succesfull Alert
  success (params) {
    return Swal.fire({
      type: 'success',
      ...params
    })
  },

  //  Error Alert
  error (error) {
    return Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: error
    })
  },

  //  Warning Alert
  warning (title) {
    return Swal.fire({
      title: title + ', Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  },

  //  Login Alert
  login (title) {
    return Swal.fire({
      type: 'success',
      title: 'Welcome, ' + title + ' !',
      text: 'Now you can play with this wonderful application!'
    })
  }
}
