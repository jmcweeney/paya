/*!
 *
 * Some custom features we can eventually bake into a different .js file if need be
 *
 *
 */

function changePaymentMethod(method) {
  if (method == "card") {
    $('#card-payment').addClass('show');
    $('#bank-account').removeClass('show');
    $('#card-payment').addClass('active');
    $('#bank-account').removeClass('active');
    $('#card-payment').fadeToggle('slow');
  }
  else {
    $('#bank-account').addClass('show');
    $('#card-payment').removeClass('show');
    $('#bank-account').addClass('active');
    $('#card-payment').removeClass('active');
    $('#bank-account').fadeToggle('slow');
  }
};

$(function () {
    $('#datetimepickerStart').datetimepicker({
      useCurrent: true,
      format: 'L',
      sideBySide: true,
      debug: false,
      locale: 'en-gb',
      ignoreReadonly: true,
      allowInputToggle: true
    });

    $('#datetimepickerEnd').datetimepicker({
        useCurrent: false,
        sideBySide: false,
        locale: 'en-gb',
        ignoreReadonly: true,
        allowInputToggle: true,
        debug: false
    });
    $("#datetimepickerStart").on("change.datetimepicker", function (e) {
        $('#datetimepickerEnd').datetimepicker('minDate', e.date);
    });
    $("#datetimepickerEnd").on("change.datetimepicker", function (e) {
        $('#datetimepickerStart').datetimepicker('maxDate', e.date);
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
$(function() {
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

// Dot navigation

[].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
  new DotNav( nav, {
    callback : function( idx ) {
      //console.log( idx )
    }
  } );
} );

$('input').on('blur keyup', function() {
    if ($("#processPayment").valid()) {
        $('#submit').prop('disabled', false);
    } else {
        $('#submit').prop('disabled', 'disabled');
    }
});
