define(['./module'], function (factories) {
    'use strict';
    factories.factory('DataServicePost', function () {                  
        var postData = function ($http, URL, controller,model) {
            debugger
            return $http.post(URL + controller, model);
        };
        return {
            postData: postData
        };
    });


});
