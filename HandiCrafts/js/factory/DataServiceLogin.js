define(['./module'], function (factories) {
    'use strict';
    factories.factory('DataServiceLogin', function () {
        var getData = function ($http, URL) {            
            return $http.get(URL);
        };
        return {
            getData: getData
        };
    });
});
