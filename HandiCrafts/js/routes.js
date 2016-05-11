/// <reference path="../View/HomePage.html" />
/// <reference path="Controllers/HomeController.js" />
/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';    
    return app.config(['$routeProvider', function ($routeProvider, $sceDelegateProvider) {             
        $routeProvider
            .when('/', {
                templateUrl: '../View/HomePage.html',
                controllerUrl: 'Controllers/HomeController',
                controller: 'HomeController'
            }).when('/View/Register', {
                templateUrl: '../View/Register.html',
                controllerUrl: 'Controllers/RegisterController',
                controller: 'RegisterController'
            }).when('/View/Login', {
                templateUrl: '../View/Login.html',
                controllerUrl: 'Controllers/LoginController',
                controller: 'LoginController',
            }).when('/View/FirstAdminScreen', {
                templateUrl: '../View/FirstAdminScreen.html',
                controllerUrl: 'Controllers/FirstAdminScreenController',
                controller: 'FirstAdminScreenController',
            }).when('/View/TemplateCreation', {
                templateUrl: '../View/TemplateCreation.html',
                controllerUrl: 'Controllers/TemplateCreationController',
                controller: 'TemplateCreationController',
            })
            .when('/View/ViewCart', {
                templateUrl: 'ViewCart.html',
                controller: 'ViewCartController',
                controllerAs: 'DemoCtrl'
            })
            .when('/View/Listing', {
                templateUrl: 'Listing.html'
            })
            .when('/View/CheckOut', {
                templateUrl: 'CheckOut.html',
                controller: 'CheckOutController',
                controllerAs: 'DemoCtrl'
            })         
            .when('/View/Account', {
                templateUrl: 'Account.html'
            })           
            .when('/View/ExtraPage', {
                templateUrl: 'ExtraPage.html'
            })
            .when('/View/ThankYou', {
                templateUrl: 'ThankYou.html'
            })
            .when('/View/Account', {
                templateUrl: 'Account.html'
            })
            .when('/View/CreateAccount', {
                templateUrl: 'Register.html'
            })
            .when('/View/HomePage', {
                templateUrl: 'HomePage.html'
            })           
            .when('/View/AngContact', {
                templateUrl: 'Contact.html',
                controller: 'ContactUsController',
                controllerAs: 'DemoCtrl'
            })
            .when('/View/TermsConditions', {
                templateUrl: 'TermsConditions.html'
            })
            .when('/View/Extrapage', {
                templateUrl: 'Extrapage.html'
            })
            .when('/View/ProductCreation', {
                templateUrl: 'ProductCreation.html',
                controller: 'ProductCreationController',

            })
               .when('/View/PageCreation', {
                   templateUrl: 'PageCreation.html',
                   controller: 'PageCreationController',

               })
            .when('/View/TermsConditions', {
                templateUrl: 'TermsConditions.html'
            }).otherwise({ redirectTo: "PageNotFound.html" });

        //$sceDelegateProvider.resourceUrlWhitelist(['self', '**']);

    }]);
});

