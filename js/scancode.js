$(document).ready(function () {
  var code128 = '';

  $(document).keyup(function (event) {
    var isFocus = $('#keyword').is(':focus');
    var value = $('#keyword').val();

    if (isFocus && value !== '') {
      code128 = '';
      return;
    }

    var keycode = event.which;
    var realkey = String.fromCharCode(event.which);
    console.log("keycode: " + keycode + " realkey: " + realkey);

    if (isAlphaNumeric(keycode))
      code128 += realkey;


    if (keycode === 13) {
      console.log(code128);
      window.location.href = '/search?type=scancode&k=' + code128.trim();
      code128 = '';
    }
  });
});

function isAlphaNumeric(code) {
  // 0-9
  if (code >= 48 && code <= 57) return true;
  // A-Z
  if (code >= 65 && code <= 90) return true;
  // a-z
  if (code >= 97 && code <= 122) return true;
  return false;
}
