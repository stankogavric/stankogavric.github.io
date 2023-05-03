function closeModal() {
  $('#exampleModal').modal('toggle');
}

function confirm() {
  let valid = document.querySelector('#subscribe')[0].checkValidity();
  let form = document.querySelector('#subscribe');
  if (valid) {
    form.submit();
    // closeModal();
  }
}