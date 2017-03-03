angular.module("app").directive('slider', function() {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/slider.html',
    link: function(scope, element, att) {
      $('.slider').slider();
    }
  }
});
