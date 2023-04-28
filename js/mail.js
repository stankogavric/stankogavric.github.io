function closeModal() {
    $('#exampleModal').modal('toggle');
  }

function confirm() {
    let valid = $('#subscribe')[0].checkValidity();
    let form = $('#subscribe');
    if (valid) {
      form.submit();
      closeModal();
    }
  }