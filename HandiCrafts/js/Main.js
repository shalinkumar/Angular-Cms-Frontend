/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'angular': '../Library/angular/angular',
        'angular-route': '../Library/angular-route/angular-route',
        'angular.animate': '../Library/angular-animate/angular-animate.min',
        'angular-aria': '../Library/angular-aria/angular-aria.min',
        'angular-material': '../Library/angular-material/angular-material.min',
        'angular-messages': '../Library/angular-messages/angular-messages.min',
        'jquery': '../Library/jquery/jquery.min',
        'bootstrap': '../Library/bootstrap/bootstrap',
        'domReady': '../Library/requirejs-domready/domReady',
        'angularAMD':'../Library/angularAMD/angularAMD',
    },
    /**
    For libs that either do not support amd out of the box, or require some 
    fine tuning to dependency mgt
    */
    shim: {
        'angular': {
            exports:'angular'
        },
        'angular-route': {
            deps:['angular']
        },
        'angular.animate': ['angular'],
        'angular-aria': ['angular'],
        'angular-material': ['angular'],
        'angular-messages': {
            exports: 'angular'
        },
        'angularAMD':['angular'],
    },
    deps: [
        //Kick start application.. see bootstrap.js
        './Bootstrap'
    ]
});