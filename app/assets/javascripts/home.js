// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
    physicianDropdown();
});

function physicianDropdown(){
    $('.dropdown-wrapper .title').click(function(){
        var $this = $(this),
            $dropdown = $this.parent().children('.dropdown');



        if(!$dropdown.hasClass('active')){
            $('.dropdown').slideUp(300);
            $('.dropdown').removeClass('active')

            $dropdown.addClass('active')
            $dropdown.slideDown(300);
        }
        else{
            $('.dropdown').slideUp(300);
            $('.dropdown').removeClass('active')
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