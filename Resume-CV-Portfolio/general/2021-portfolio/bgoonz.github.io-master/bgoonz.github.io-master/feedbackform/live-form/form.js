const $ = require("jquery");

$(".ajax-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    message: {
      required: true,
      minlength: 5,
    },
  },
  errorPlacement: function (error, element) {},
  submitHandler: function (form) {
    $.ajax({
      dataType: "jsonp",
      url: "http://getsimpleform.com/messages/ajax?form_api_token=<api-token>",
      data: $(".ajax-form").serialize(),
    }).done(function () {
      //callback which can be used to show a thank you message
      //and reset the form
      $(".ajax-form").hide();
      $(".form-thank-you").fadeIn("400");
    });
    return false; //to stop the form from submitting
  },
});
