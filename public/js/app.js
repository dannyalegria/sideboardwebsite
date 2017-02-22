angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html'
  })
  .state('menu',{
    url: '/menu',
    templateUrl: './views/menu.html'
  })
  .state('locations',{
    url: '/locations',
    templateUrl: './views/locations.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  })
  .state('shop', {
  url: '/shop',
  templateUrl: './views/shop.html'
  })
  .state('product', {
  url: '/shop/:id',
  templateUrl: '../views/product.html',
  controller: 'productController'
  })
  .state('admin', {
  url: '/admin',
  templateUrl: './views/admin.html'
  });

});
