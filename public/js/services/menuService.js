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
  this.getBeverageMenu = $http.get('/api/beveragemenu');
  this.getWeekdayMorningMenu = $http.get('/api/weekdaymorning');
  this.getFridayMorningMenu = $http.get('/api/fridaymorning');
  this.getWeekendMorningMenu = $http.get('/api/weekendmorning');
  this.getLunchMenu = $http.get('/api/lunch');
  this.getDinnerMenu = $http.get('/api/dinner');

})
