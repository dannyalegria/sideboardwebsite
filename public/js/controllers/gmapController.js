angular.module("app")
.controller('gmapController', function($scope, NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDofbWymJD6lJmALcSBOYW-qpNgcFNJVSk";
});
