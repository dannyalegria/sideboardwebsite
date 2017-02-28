angular.module("app")
.controller("menuController", function($scope, menuService, $stateParams){

  //NOTE Get all menu Items:
  menuService.getMenuItems.then(function(response){
    $scope.menuItems = response.data;
  });


  menuService.getBeverageMenu.then(function(response){
    //NOTE Get all beverage menu items:
    $scope.beverageMenu = response.data;

    //NOTE Get all beverages in the 'Handcrafted Adult Beverage' Category:
    var adultBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Handcrafted Adult Beverages"){
        adultBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.adultBeverages = adultBeverages;

    //NOTE Get all beverages in the 'Coffee' category:
    var coffeeBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Coffee"){
        coffeeBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.coffeeBeverages = coffeeBeverages;

    //NOTE Get all beverages in the 'Espresso Drinks' category:
    var espressoBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Espresso Drinks"){
        espressoBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.espressoBeverages = espressoBeverages;

    //BUG This isn't working for some reason BUG

    //NOTE Get all beverages in the 'Iced Coffee' category:
    var icedCoffeeBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Iced Coffee"){
        icedCoffeeBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.icedCoffeeBeverages = icedCoffeeBeverages;

    //NOTE Get all beverages in the 'Hot Chocolate' category:
    var hotChocolateBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Hot Chocolate"){
        hotChocolateBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.hotChocolateBeverages = hotChocolateBeverages;

    //NOTE Get all beverages in the 'Tea Service' category:
    var teaServiceBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Tea Service"){
        teaServiceBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.teaServiceBeverages = teaServiceBeverages;

    //NOTE Get all beverages in the 'Wines On Tap' category:
    var winesOnTap = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Wines on Tap"){
        winesOnTap.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.winesOnTap = winesOnTap;

    //NOTE Get all beverages in the 'Wines' category:
    var wines = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Wines"){
        wines.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.wines = wines;

    //NOTE Get all beverages in the 'Draft Beer' category:
    var draftBeers = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Draft Beer"){
        draftBeers.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.draftBeers = draftBeers;

    //NOTE Get all beverages in the 'Bottled Beers' category:
    var bottledBeers = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Bottled Beers"){
        bottledBeers.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.bottledBeers = bottledBeers;

    //NOTE Get all beverages in the 'Refreshers and Sodas' category:
    var refreshersAndSodas = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Refreshers and Sodas"){
        refreshersAndSodas.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.refreshersAndSodas = refreshersAndSodas;

  });

  //BUG Why aren't they going in order? BUG
  menuService.getWeekdayMorningMenu.then(function(response){
    //NOTE Get all items in Weekday Morning Menu:
    $scope.weekdayMorningMenu = response.data;
  });

  menuService.getFridayMorningMenu.then(function(response){
    //NOTE Get all items in Friday Morning Menu:
    $scope.fridayMorningMenu = response.data;
  });

  menuService.getWeekendMorningMenu.then(function(response){
    //NOTE Get all items in Weekend Morning Menu:
    $scope.weekendMorningMenu = response.data;

    //NOTE Get all items in the 'Weekend Morning Beverages' Category:
    var weekendMorningBeverages = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Weekend Morning Beverages"){
        weekendMorningBeverages.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.weekendMorningBeverages = weekendMorningBeverages;

    //NOTE Get all items in the 'Weekend Breakfast' Category:
    var weekendBreakfast = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "Weekend Breakfast"){
        weekendBreakfast.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.weekendBreakfast = weekendBreakfast;

  });

  menuService.getLunchMenu.then(function(response){
    //NOTE Get all items in Lunch Menu:
    $scope.lunchMenu = response.data;

    //NOTE Get all items in the 'Sides' Category:
    var sides = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "sides"){
        sides.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.sides = sides;

    //NOTE Get all items in the 'House Made Dips' Category:
    var houseMadeDips = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "house made dips"){
        houseMadeDips.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.houseMadeDips = houseMadeDips;

    //NOTE Get all items in the 'soup' Category:
    var soups = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "soup"){
        soups.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.soups = soups;

    //NOTE Get all items in the 'salads' Category:
    var salads = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "salads"){
        salads.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.salads = salads;

    //NOTE Get all items in the 'sandwhiches' Category:
    var sandwhiches = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "sandwhiches"){
        sandwhiches.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.sandwhiches = sandwhiches;

    //NOTE Get all items in the 'pasta' Category:
    var pastas = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "pasta"){
        pastas.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.pastas = pastas;

  });

  menuService.getDinnerMenu.then(function(response){
    //NOTE Get all items in Dinner Menu:
    $scope.dinnerMenu = response.data;

    //NOTE Get all items in the 'Sides' Category:
    var sides = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "sides"){
        sides.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.sides = sides;

    //NOTE Get all items in the 'House Made Dips' Category:
    var houseMadeDips = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "house made dips"){
        houseMadeDips.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.houseMadeDips = houseMadeDips;

    //NOTE Get all items in the 'soup' Category:
    var soups = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "soup"){
        soups.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.soups = soups;

    //NOTE Get all items in the 'salads' Category:
    var salads = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "salads"){
        salads.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.salads = salads;

    //NOTE Get all items in the 'sandwhiches' Category:
    var sandwhiches = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "sandwhiches"){
        sandwhiches.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.sandwhiches = sandwhiches;

    //NOTE Get all items in the 'pasta' Category:
    var pastas = [];
    for (var i = 0; i < response.data.length; i++) {
      if(response.data[i].category === "pasta"){
        pastas.push(response.data.splice(i, 1)[0]);
        i--;
      }
    }
    $scope.pastas = pastas;

  });

});
