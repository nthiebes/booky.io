/* eslint-disable */
export default `
(function() {
  function centeredPopupPosition(w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;

    return [left, top];
  }
  
  var width = 400;
  var height = 250;
  var position = centeredPopupPosition(width, height);

  window.open(
    'http://localhost:3000/add?url=' + encodeURIComponent(document.location.href) + '&title=' + encodeURIComponent(document.title), 'bookyBookmarklet', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=' + width + ',height=' + height + ',top=' + position[1] + ',left=' + position[0]
  ).focus();
}());
`
/* eslint-enable */
