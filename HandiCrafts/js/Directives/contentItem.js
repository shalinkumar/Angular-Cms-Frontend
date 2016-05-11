define(['./module'], function (directives) {
    'use strict';    
    directives.directive('contentItem', ['$compile', 'PageDesignService', '$http', function ($compile, PageDesignService, $http) {       
        var getTemplate = function (templates, contentType) {            
            var template = '';
            switch (contentType) {
                case 'Image':
                    template = templates;
                    break;
                case 'video':
                    template = templates.videoTemplate;
                    break;
                case 'notes':
                    template = templates.noteTemplate;
                    break;
            }
            return template;
        };

        var linker = function (scope, element, attrs) {            
            scope.rootDirectory = 'images/';
            var pageName = "HomePage";
            PageDesignService.getTemplates($http, 'http://localhost:54478//api/', pageName).then(function (response) {                
                var templates = response.data;
                element.html(getTemplate(templates.Content, scope.content.ContentType));
                $compile(element.contents())(scope);
            });
        };

        return {
            restrict: 'E',
            link: linker,
            scope: {
                content: '='
            }
        };
    }]);
});
