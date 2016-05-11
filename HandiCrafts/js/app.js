/**
Loads sub module and wraps them up into the main module
this should be used for top level module definition only
*/

define([
'angular',
'angular-route',
'angular.animate',
'angular-aria',
'angular-material',
'./Controllers/Index',
'./Directives/Index',
'./factory/index',
], function (angular) {
    'use strict';    
    return angular.module('app', [
        'app.Controllers',
        'app.Directives',
        'app.factory',
        'ngRoute',
        //'ng',
        'ngAnimate',
        'ngAria',
        'ngMaterial'
    ]);    
});


//'./Directives/Index',
//'./Filters/Index',
//'./Services/Index'


//'app.Directives',
//      'app.Filters',
//      'app.Services',