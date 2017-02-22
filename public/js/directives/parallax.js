angular.module("app")
.directive("parallax", function($document) {
  var parallaxLink = function(scope, el, attrs) {
    var p = el.find(".parallax");
    p.css("background-image", "url(" + scope.backgroundUrl + ")");
    $document.on("scroll", function() {
      var scrollTop = $document.scrollTop();
      var top = p.position().top;
      var height = p.height();
      if (top < scrollTop && top + height > scrollTop) {
        p.css({"background-position-y":  -1 * (scrollTop - top) + "px"});
        console.log("Background position:", p.css("background-position-y"));
      }
    });
  };

  return {
    restrict: "AE",
    scope: {
      backgroundUrl: "="
    },
    transclude: true,
    template: "<div class='parallax'><div class='content'><ng-transclude></ng-transclude></div></div>",
    link: parallaxLink
  };
});
