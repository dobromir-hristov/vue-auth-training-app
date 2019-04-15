import Swal from 'sweetalert2'

export default {

  //Succesfull Alert
  success (yourName) {
    return Swal.fire({
      type: 'success',
      title: yourName + ', Your work has been saved',
      text: 'Everything Good!'
    })
  },

  //Error Alert
  error (yourName) {
    return Swal.fire({
      type: 'error',
      title: 'Oops...  ' + yourName,
      text: 'Something went wrong!',
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
  },

  //Login Alert
  login (yourName) {
    return Swal.fire({
      type: 'success',
      title: 'Welcome, ' + yourName + ' !',
      text: 'Now you can play with this wonderful alert buttons!',
    })
  },
}