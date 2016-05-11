/// <reference path="../../View/HomePage.html" />
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('LoginController', ['DataServiceLogin', '$scope', '$timeout', '$q', '$http', '$location', function (DataServiceLogin, $scope, $timeout, $q, $http, $location) {      
        $scope.SignInForm = function () {            
            var Credemtials = {
                "userName": $scope.SignIn_Name,
                "passWord": $scope.SignIn_Password
            };
            var url = "http://localhost:54478//api/Login/ValidateUser?&userName=" + $scope.SignIn_Name + "&passWord=" + $scope.SignIn_Password + "";         
            DataServiceLogin.getData($http, url).then(function (result) {
                
                    if (result.data == false) {
                        
                        $scope.errorCredentials = $scope.errorCredentials + '<label style="color: green"> <br/><i >Invalid username and password</i></label>';
                    } else if (result.data == true) {
                        
                        $location.path("/View/FirstAdminScreen");
                    }
                });         
        }
    }])
})
