angular.module("app").directive('floatyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/floatyNavTmpl.html',
    contoller: function($scope){
      $scope.showNav = false;
    },
    link: function(scope, element, att) {
      $('.scrollspy').scrollSpy();
      $(window).scroll(function(){
        var scrollPosition = $(this).scrollTop();
        if(scrollPosition > 300){
          $(".scroll-spy-nav").addClass('pinned');
        } else {
          $(".scroll-spy-nav").removeClass('pinned');
        }
      })
   }
  };
});
