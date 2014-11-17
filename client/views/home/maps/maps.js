var controlCircle = '#control-circle-radius-range';
var circleInput = '#circle-radius';
var mapHelper = {
  display: function() {
    GoogleMaps.init({
      'sensor': true,
      'libraries': 'places'
    }, mapHelper.initialize);
  },
  initialize: function() {
    var mapOptions = {
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.MAP
    };
    mapHelper.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    mapHelper.getLocation();
    google.maps.event.addListener(mapHelper.map, 'click', mapHelper._clickListener);
  },
  circle: null,
  marker: null,
  geoInfo: (function() {
    return document.getElementById("geo-info");
  })(),
  mapCanvans: (function() {
    return document.getElementById("map-canvas");
  })(),
  getLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mapHelper.showPosition);
    } else {
      mapHelper.geoInfo.innerHTML = "Geolocation is not supported by this browser.";
    }
  },
  showPosition: function(position) {
    mapHelper.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  },
  _clickListener: function(event) {
    mapHelper._clearPrev();
    var latLng = event.latLng;
    mapHelper.marker = new google.maps.Marker({
      position: latLng,
      map: mapHelper.map,
      draggable: true
    });
    mapHelper.circle = new google.maps.Circle({
      map: mapHelper.map,
      // metres
      radius: parseInt($(controlCircle).val())/2 || 1250,
      clickable: false,
      fillColor: '#fff',
      fillOpacity: .6,
      strokeColor: '#313131',
      strokeOpacity: .4,
      strokeWeight: .8
    });
    mapHelper.circle.bindTo('center', mapHelper.marker, 'position');
  },
  _clearPrev: function() {
    if(mapHelper.marker) {
      mapHelper.marker.setMap(null);
      mapHelper.circle.setMap(null);
    }
  },
  _showRange: function() {

  }
};
/*****************************************************************************/
/* Maps: Event Handlers and Helpers */
/*****************************************************************************/
Template.Maps.events({
  'input #control-circle-radius-range': function() {
    $(circleInput).val($(controlCircle).val());
    mapHelper.circle.setRadius(parseInt($(controlCircle).val())/2);
  }
});

Template.Maps.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Maps: Lifecycle Hooks */
/*****************************************************************************/
Template.Maps.created = function () {
};

Template.Maps.rendered = function () {
  mapHelper.display();
};

Template.Maps.destroyed = function () {
};
