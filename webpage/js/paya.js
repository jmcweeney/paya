/*!
 * Some custom features we can eventually bake into a different .js file
 *
 * 
 */

function changePaymentMethod(method) {
  if (method == "card") {
    $("#pills-card-payment").addClass('active');
    $("#pills-card-payment").addClass('show');
    $("#pills-bank-account").removeClass('active');
    $("#pills-bank-account").removeClass('show');
  }
else {
    $("#pills-card-payment").removeClass('show');
    $("#pills-card-payment").removeClass('active');
    $("#pills-bank-account").addClass('active');
    $("#pills-bank-account").addClass('show');
  }
}
