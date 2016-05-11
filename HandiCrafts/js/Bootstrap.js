/**
Bootstraps angular onto the window.document node
Note: the ng-app attribute should index.html when using ng.bootstrap
*/
define([
'require',
'angular',
'app',
'routes'
], function (require, ng) {
    'use strict';

    /**
    place operations that need to initialize prior to app start here
    using the 'run' function on the top-level module
    */

    require(['domReady!'], function (document) {        
        ng.bootstrap(document, ['app']);
    });
});
