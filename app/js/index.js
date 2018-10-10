$(document).ready(init);


function init() {
  paralax();
}
function paralax() {
  $('body').mousemove(function (e) {
    var x = -e.pageX / 120;
    var y = -e.pageY / 120+7;
    $('#image').css({
      'transform':'translate('+ x + '%, '+ y +'%)'
    });
  })
}
