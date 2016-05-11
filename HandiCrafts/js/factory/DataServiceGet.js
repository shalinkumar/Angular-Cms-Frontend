define(['./module'], function (factories) {
    'use strict';    
    factories.factory('DataServiceGet', function () {
        
        var getData = function ($http, URL,controller) {                     
            return $http.get(URL + controller);
        };
        return {
            getData: getData
        };
    });
});
