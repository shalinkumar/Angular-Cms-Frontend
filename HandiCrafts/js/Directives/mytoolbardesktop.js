define(['./module'], function (directives) {
    'use strict';
    directives.directive('mytoolbardesktop', ['$compile', '$http', function ($compile, $http) {
        return {
            restrict: 'EA',
            priority: 499,
            terminal: true,
            templateUrl: '../../Templates/mdtoolbardesktop.html',
            replace: false,
            //link: linker,
            //scope: {
            //    content: '='
            //}
        };
    }]);
});
