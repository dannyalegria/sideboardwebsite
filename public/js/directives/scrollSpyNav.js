angular.module("app").directive('scrollSpyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/scrollSpyNavTempl.html',
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
