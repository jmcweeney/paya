/*!
 * Some custom features we can eventually bake into a different .js file
 *
 *
 */

function changePaymentMethod(method) {
  if (method == "card") {
    $("#card-payment").addClass('active');
    $("#card-payment").addClass('show');
    $("#bank-account").removeClass('active');
    $("#bank-account").removeClass('show');
  }
else {
    $("#card-payment").removeClass('show');
    $("#card-payment").removeClass('active');
    $("#bank-account").addClass('active');
    $("#bank-account").addClass('show');
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    $('#datetimepicker7').datetimepicker({
      useCurrent: true,
      format: 'L',
      sideBySide: true,
      debug: false,
      locale: 'en-gb',
      ignoreReadonly: true,
      allowInputToggle: true
    });

    $('#datetimepicker8').datetimepicker({
        useCurrent: false,
        format: 'L',
        sideBySide: true,
        debug: false,
        locale: 'en-gb',
        ignoreReadonly: true,
        allowInputToggle: true
    });
    $("#datetimepicker7").on("change.datetimepicker", function (e) {
        $('#datetimepicker8').datetimepicker('minDate', e.date);
    });
    $("#datetimepicker8").on("change.datetimepicker", function (e) {
        $('#datetimepicker7').datetimepicker('maxDate', e.date);
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
