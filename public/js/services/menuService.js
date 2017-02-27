angular.module("app")
.service("menuService", function($http, $state){

  // this.getProducts = $http.get('/api/shop');
  //
  // this.getProductData = function(id){
  //   return $http({
  //     method: 'GET',
  //     url: '/api/shop/' + id
  //   })
  // }

  this.getMenuItems = $http.get('/api/menu');

})
