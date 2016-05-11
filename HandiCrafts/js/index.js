var app = angular.module('Index-Page', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'Templates/HomePage.html'
        })
        .when('/Templates/Listing', {
            templateUrl: 'Templates/Listing.html'
        })
        .when('/Templates/ViewCart', {
            templateUrl: 'Templates/ViewCart.html'
        })
    .when('/Templates/CheckOut', {
        templateUrl: 'Templates/CheckOut.html'
    })
     .when('/Templates/Contact', {
         templateUrl: 'Templates/Contact.html'
     })
    .when('/Templates/Account', {
        templateUrl: 'Templates/Account.html'
    })
      .when('/Templates/Register', {
          templateUrl: 'Templates/Register.html'
      })
     .when('/Templates/ExtraPage', {
         templateUrl: 'Templates/ExtraPage.html'
     })
     .when('/Templates/TermsConditions', {
         templateUrl: 'Templates/TermsConditions.html'
     })
});


app.controller('cfgController', function ($scope) {
    //$scope.message = "Hello world";
});
