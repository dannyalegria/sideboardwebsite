angular.module("app")
.controller("mainController", function($scope, mainService){

  mainService.getProducts.then(function(response){
    $scope.products = response.data;
  });

});
