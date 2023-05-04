$(function () {
  $("#contactForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) { },
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var email = $("input#email").val();
      $this = $("#sendMessageButton");
      $this.prop("disabled", true);
      $.ajax({
        url: "./mail/contact_me.php",
        type: "POST",
        data: { email: email },
        cache: false,
        success: function () {
          $("#success").html('<div class="alert alert-success alert-dismissible fade show" role="alert">');
          $("#success > .alert-success")
            .html(
              '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">'
            )
            .append("</button>");
          $("#success > .alert-success").append(
            "<strong>Your message has been sent. </strong>"
          );
          $("#success > .alert-success").append("</div>");
          $("#contactForm").trigger("reset");
        },
        error: function () {
          $("#success").html('<div class="alert alert-danger alert-dismissible fade show" role="alert">');
          $("#success > .alert-danger")
            .html(
              '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">'
            )
            .append("</button>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Sorry" +
              ", it seems that my mail server is not responding. Please try again later!"
            )
          );
          $("#success > .alert-danger").append("</div>");
          $("#contactForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
$("#email").focus(function () {
  $("#success").html("");
});
