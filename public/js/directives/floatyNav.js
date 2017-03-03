angular.module("app").directive('floatyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/floatyNavTmpl.html',
    contoller: function($scope){
      $scope.showNav = false;
    },
    link: function(scope, element, att) {
      $('.scrollspy').scrollSpy();
      $(".button-collapse").sideNav();
      var distance = $(".floaty-nav").offset().top;
      console.log(distance);
        $(window).scroll(function(){
          var scrollPosition = $(this).scrollTop();
          console.log(scrollPosition)
          if(scrollPosition > distance){
            $(".floaty-nav").addClass('fix');
            $(".nav-text").addClass('fix-text');
          } else {
            $(".floaty-nav").removeClass('fix');
            $(".nav-text").removeClass('fix-text');
          }
        })
   }
  };
});
