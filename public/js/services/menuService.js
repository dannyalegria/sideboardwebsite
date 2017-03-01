angular.module("app")
.service("menuService", function($http, $state){

  this.getMenuItems = $http.get('/api/menu');

  this.getBeverageMenu = $http.get('/api/beveragemenu');

  this.getWeekdayMorningMenu = $http.get('/api/weekdaymorning');

  this.getFridayMorningMenu = $http.get('/api/fridaymorning');

  this.getWeekendMorningMenu = $http.get('/api/weekendmorning');

  this.getLunchMenu = $http.get('/api/lunch');
  
  this.getDinnerMenu = $http.get('/api/dinner');

})
