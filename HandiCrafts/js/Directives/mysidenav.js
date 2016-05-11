define(['./module'], function (directives) {
    'use strict';    
    directives.directive('mysidenav', ['$compile', '$http', function ($compile, $http) {        
        return {
            restrict: 'EA',
            priority:500,
            terminal:true,
            templateUrl: '../../Templates/mdsidenav.html',
            replace: false,
            //link: linker,
            //scope: {
            //    content: '='
            //}
        };
    }]);
});
