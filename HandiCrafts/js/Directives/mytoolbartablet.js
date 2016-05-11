define(['./module'], function (directives) {
    'use strict';
    directives.directive('mytoolbartablet', ['$compile', '$http', function ($compile, $http) {
        return {
            restrict: 'EA',
            priority: 498,
            terminal: true,
            templateUrl: '../../Templates/mdtoolbartablet.html',
            replace: false,
            //link: linker,
            //scope: {
            //    content: '='
            //}
        };
    }]);
});
