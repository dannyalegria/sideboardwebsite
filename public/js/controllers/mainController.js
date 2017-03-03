angular.module("app")
.controller("mainController", function($scope, mainService, orderService){

  mainService.getProducts.then(function(response){
    $scope.products = response.data;
  });

  $scope.addToCart = function(id) {
  // console.log(id, qty);
  orderService.addToCart(id, 1).then(function(response) {
    console.log(response);
    // $state.go("orders")
    });
  }

});
