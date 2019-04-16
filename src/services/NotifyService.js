import Swal from 'sweetalert2'

export default {

  //Succesfull Alert
  success (yourName, yourMsg) {
    return Swal.fire({
      type: 'success',
      title: yourName,
      text: yourMsg
    })
  },

  //Error Alert
  error (errorMsg) {
    return Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: errorMsg,
    })
  },

  //Warning Alert
  warning (yourName) {
    return Swal.fire({
      title: yourName + ', Are you sure?',
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