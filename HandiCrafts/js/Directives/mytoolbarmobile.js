define(['./module'], function (directives) {
    'use strict';
    directives.directive('mytoolbarmobile', ['$compile', '$http', function ($compile, $http) {
        return {
            restrict: 'EA',
            priority: 497,
            terminal: true,
            templateUrl: '../../Templates/mdtoolbarmobile.html',
            replace: false,
            //link: linker,
            //scope: {
            //    content: '='
            //}
        };
    }]);
});
