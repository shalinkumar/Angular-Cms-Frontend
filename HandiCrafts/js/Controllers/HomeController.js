define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('HomeController', ['DataServiceGet', '$scope', '$timeout', '$q', '$http', function (DataServiceGet, $scope, $timeout, $q, $http) {
        var ctrl = this;
        ctrl.content = [];
        ctrl.fetchContent = function () {                      
            DataServiceGet.getData($http, 'http://localhost:54478//api/', 'Products').then(function (result) {
                ctrl.content = result.data;
            });
        };
        ctrl.fetchContent();
    }])
})