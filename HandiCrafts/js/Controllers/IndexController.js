define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('IndexController', function ($scope, $mdSidenav) {
                
        $scope.showMobileMainHeader = true;
        $scope.openSideNavPanel = function () {            
            $mdSidenav('left').open();
        };
        $scope.closeSideNavPanel = function () {            
            $mdSidenav('left').close();
        };

        $scope.TopSell = false;
        $scope.TopSellclass = "fa fa-minus";
        $scope.toggleTopSell = function () {
            $scope.TopSell = $scope.TopSell === false ? true : false;
            if ($scope.TopSellclass === "fa fa-minus")
                $scope.TopSellclass = "fa fa-plus";
            else
                $scope.TopSellclass = "fa fa-minus";
        };

        $scope.NewRelease = false;
        $scope.classNewRelease = "fa fa-minus";
        $scope.toggleNewRelease = function () {
            $scope.NewRelease = $scope.NewRelease === false ? true : false;
            if ($scope.classNewRelease === "fa fa-minus")
                $scope.classNewRelease = "fa fa-plus";
            else
                $scope.classNewRelease = "fa fa-minus";
        };

       
      
        $scope.uri = "http://localhost:15666/img/home/1920/965/";
        $scope.folders = [
        'ProductOne'
        ];
     
        $scope.images = [0,1];
        $scope.extension = "jpg";
        $scope.currentFolder = $scope.folders[0];
        $scope.selectFolder = function (folder) {
            debugger
            $scope.currentFolder = folder;
        };
        $scope.activeFolder = function (folder) {
            debugger
            return (folder === $scope.currentFolder) ? 'active' : '';
        };

        //$scope.w = window.innerWidth;
        //$scope.h = window.innerHeight - 20;
        //$scope.uri = "http://lorempixel.com";
        
        //$scope.folders = [
        //  'abstract',
        //  'animals',
        //  'business',
        //  'cats',
        //  'city',
        //  'food',
        //  'night',
        //  'life',
        //  'fashion',
        //  'people',
        //  'nature',
        //  'sports',
        //  'technics',
        //  'transport'
        //];
        //$scope.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        //$scope.currentFolder = $scope.folders[0];
        //$scope.selectFolder = function (folder) {
            
        //    $scope.currentFolder = folder;
        //};
        //$scope.activeFolder = function (folder) {
            
        //    return (folder === $scope.currentFolder) ? 'active' : '';
        //};

    })
})