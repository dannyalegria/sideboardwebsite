angular.module("app")
.controller('ShowImages', function($scope, InstagramAPI) {
  $scope.layout = 'grid';
  $scope.data = {};
  $scope.pics = [];

  InstagramAPI.fetchPhotos(function(data) {
    $scope.pics = data;
  });
});
