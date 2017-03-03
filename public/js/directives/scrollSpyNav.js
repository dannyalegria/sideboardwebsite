angular.module("app").directive('scrollSpyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/scrollSpyNavTempl.html',
    link: function(scope, element, att) {
      $('.scrollspy').scrollSpy();
      var distance = $(".floaty-nav").offset().top;
      console.log(distance);
        $(window).scroll(function(){
          var scrollPosition = $(this).scrollTop();
          console.log(scrollPosition)
          if(scrollPosition > distance){
            $(".floaty-nav").addClass('fix');
          } else {
            $(".floaty-nav").removeClass('fix');
          }
        })
   }
  };
});
