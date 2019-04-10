import Swal from 'sweetalert2'

export const SwalService = {
  swalTest (text) {
    Swal.fire("'" + text + "'")
  }
}