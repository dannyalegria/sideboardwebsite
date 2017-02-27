angular.module("app")
.controller("menuController", function($scope, menuService, $stateParams){

  menuService.getMenuItems.then(function(response){
    console.log(response.data);
    $scope.menuItems = response.data;
  });

});
