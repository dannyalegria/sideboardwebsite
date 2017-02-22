angular.module("app")
.controller("productController", function($scope, mainService, $stateParams){

  var id = $stateParams.id;

  mainService.getProductData(id).then(function(response){
    $scope.product = response.data;
  });

});
