// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
    physicianBio();
    sizeBio();
    contactForm();
    overlayListener();
    sizeOverlay();
  $(window).resize(function(){
    sizeBio();
    sizeOverlay();
  })
});

function contactForm(){
  $('#contact-submit').click(function(e) {
    e.preventDefault();
    var text = $("textarea").val();
    if(text != ''){
      $.ajax({
        method: 'POST',
        url: '/comment',
        data: {
          text: text
        },
        success: function(data) {
          console.log(data == true)
          if(data == true){
            $('textarea, #contact-submit, .suggestions p, .suggestions h6').fadeOut();
            $('.thanks').fadeIn();
          }
        }
      })
    }
  });

}

function sizeBio(){
  $('.bio-content').each(function(e){
    var $this = $(this),
        $nav = $(this).prev();
    $this.css({
      height: $this.find('.about').height() + 50
    })

    $nav.css({
      marginTop: ($this.height() - $nav.height())/2
    })

    $this.find('div').each(function(e){
      $(this).css({
        paddingTop: ($this.height() - $(this).height())/2
      })

    })
  })
}

function physicianBio(){
    $('.bio-nav a').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            var section = $(this).attr('class');
            $(this).parent().find('a').removeClass("active");
            $(this).addClass("active");
            $(this).parent().parent().find('.bio-content div').removeClass('show')
            $(this).parent().parent().find('.bio-content .' + section).addClass('show')
        }
    })
}

function initGoogleMap(){
    var map;
    var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    map = new google.maps.Map(document.getElementById('map-main'), {
        center: {lat: 39.698438, lng: -75.652007},
        zoom: 15,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.698438, lng: -75.652007},
        map: map,
        title: '490 Mount Pleasant Ave'
    });
    map.setOptions({styles: styles});


    var map2;
    var styles2 = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    map2 = new google.maps.Map(document.getElementById('map-secondary'), {
        center: {lat: 39.609127, lng: -75.833370},
        zoom: 15,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 39.609127, lng: -75.833370},
        map: map2,
        title: '490 Mount Pleasant Ave'
    });
    map2.setOptions({styles: styles2});

}

function overlayListener(){
  $('.bio-more').click(function(e){
    e.preventDefault();
    showOverlay();
    if($(this).hasClass("wes")){
      $('.extended.wes-bio').addClass('show');
    }
    else{
      $('.extended.jim-bio').addClass('show');
    }
    $('.site-overlay').find('.close').click(function(e){
      e.preventDefault();
      hideOverlay();
      $('.extended').removeClass('show')
    })
  })
}

function showOverlay(){

  $('.site-overlay').addClass('open');
  $('body').css({
    overflow: 'hidden'
  })
}

function hideOverlay(){
  $('.site-overlay').removeClass('open');
  $('body').css({
    overflow: 'visible'
  })
}


function  sizeOverlay(){
  $('.site-overlay').css({
    height: $(window).height()
  })
}
