$(document).ready(function(){
  $(window).scroll(function() {
    if($(this).scrollTop() >=10) {
      $('nav').addClass('sticky');
      $('.side-image  img').css({
        'max-height':'100px', 
        'margin-top':'5px',
      });
    } else {
      $('nav').removeClass('sticky');
      $('.side-image  img').css({
        'max-height':'220px', 
        'margin-top':'0px',
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