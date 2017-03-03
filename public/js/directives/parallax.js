angular.module("app").directive('parallax', function() {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/parallax.html',
    scope: {pic: '@'},
    link: function(scope, element, att) {
      console.log("test test test");
      $('#parallax').parallax();
      console.log(scope.pic)
    }
  }
});
