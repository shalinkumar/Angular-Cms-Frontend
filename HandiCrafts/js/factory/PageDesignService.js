define(['./module'], function (factories) {
    'use strict';    
    factories.factory('PageDesignService', function () {        
        var getTemplates = function ($http, URL, pageName) {            
            return $http.get(URL + 'PageCreation/GetPageDesign?&pageName=' + pageName);
        };
        return {
            getTemplates: getTemplates
        };

    });
});