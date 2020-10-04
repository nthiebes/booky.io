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
  function getDescription() {
    var meta = document.querySelector('meta[name=description]'),
      description = meta ? meta.getAttribute('content') : '';
  
    return description;
  }
  
  var width = 300;
  var height = 590;
  var position = centeredPopupPosition(width, height);

  window.open(
    '${window.location.origin}/extension/add?url=' + encodeURIComponent(window.location.href) + '&name=' + encodeURIComponent(document.title) + '&note=' + getDescription(), 'bookyBookmarklet', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=' + width + ',height=' + height + ',top=' + position[1] + ',left=' + position[0]
  ).focus();
}());
`
/* eslint-enable */
