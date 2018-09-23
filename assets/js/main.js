$(document).ready(function(){
  var date = new Date;
  $('#cyear').text(date.getFullYear())
  $(window).scroll(function() {
    if($(this).scrollTop() >=10) {
      $('nav').addClass('sticky');
      $('.side-image  img').css({
        'max-height':'100px',
        'max-width': '70px', 
      });
    } else {
      $('nav').removeClass('sticky');
      $('.side-image  img').css({
        'max-height':'220px',
        'max-width': '100%', 
      });
    }
    if($(window).width() <=900){
      $('.side-image  img').css({
        'max-height':'100px',
      });
    } 
  });
  $('#btn-menu').click(function() {
     $('.menu').toggleClass("open-menu");
  });    
});
// wn map;
function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(39, -77),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  window.map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

window.myMap = myMap;
