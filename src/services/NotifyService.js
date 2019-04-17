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
  error (params) {
    return Swal.fire({
      type: 'error',
      ...params
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
  }
}
