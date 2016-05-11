define(['./module'], function (directives) {
    'use strict';
    directives.directive('myindexpagecontent', ['$compile', '$http', function ($compile, $http) {
        return {
            restrict: 'EA',
            priority: 496,
            terminal: true,
            templateUrl: '../../Templates/indexpagecontent.html',
            replace: false,          
        };
    }]);
});
