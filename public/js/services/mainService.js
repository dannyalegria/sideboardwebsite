angular.module("app")
.service("mainService", function($http, $state){

  this.getProducts = $http.get('/api/shop');

  this.getProductData = function(id){
    return $http({
      method: 'GET',
      url: '/api/shop/' + id
    })
  }

})
