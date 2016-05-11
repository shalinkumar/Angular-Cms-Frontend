define(['./module'], function (controllers) {
    'use strict'

    controllers.controller('RegisterController', ['DataServiceGet', 'DataServicePost', '$scope', '$timeout', '$q', '$http', function (DataServiceGet, DataServicePost, $scope, $timeout, $q, $http) {
        

        var title;
        var header;
        var controller;
        var userRole;
        var ctrl = this;
        ctrl.content = [];

        DataServiceGet.getData($http, 'http://localhost:54478//api/', 'AdminInfo').then(function (result) {
            
            ctrl.content = result.data;


            if (ctrl.content.length == 0) {
                
                $scope.title = "New Admin";
                $scope.header = "Create an admin account";
                controller = 'AdminInfo';
                userRole = 'Admin';
            } else {
                
                $scope.title = "New Customers";
                $scope.header = "Create an account";
                controller = 'CustInfo';
                userRole = 'User';
            }
        });


        $scope.countries = [
            "India",
            "Australia",
        ];
        $scope.states = [
           "Tamil Nadu",
           "Karnataka",
        ];

      

        $scope.signupform = function (userData) {
            
            var val = $scope.Signup_Form_Customer_I;


            var Users = {
                "UserName": $scope.shipping_UserName,
                "FirstName": $scope.shipping_firstname,
                "LastName": $scope.shipping_lastname,
                "Email": $scope.shipping_email,
                "Company": $scope.shipping_company,
                "TaxId": $scope.tax_id,
                "Phone": $scope.shipping_phone,
                "Address1": $scope.shipping_address,
                "Address2": $scope.shipping_address2,
                "Country": $scope.shipping_country,
                "State": $scope.shipping_state,
                "City": $scope.shipping_city,
                "Zip": $scope.shipping_zip,
                "Comments": $scope.Comments,
                "Created": new Date(),
                "CreatedBy": 'shalin',
                "Modified": null,
                "ModifiedBy": null,
            };

            var Login = {
                "UserName": $scope.shipping_UserName,
                "Password": $scope.shipping_password,
                "Role": userRole,
                "Created": new Date(),
                "Modified": null
            };


            DataServicePost.postData($http, 'http://localhost:54478//api/', controller, Users).then(function (result) {
                
                if (result.errors) {
                    $scope.errorName = result.errors.name;
                    $scope.errorUserName = result.errors.username;
                    $scope.errorEmail = result.errors.email;
                } else {

                    $scope.message = result.message;
                }
            });

            DataServicePost.postData($http, 'http://localhost:54478//api/', 'Login', Login).then(function (result) {
                
                if (result.errors) {
                    $scope.errorName = result.errors.name;
                    $scope.errorUserName = result.errors.username;
                    $scope.errorEmail = result.errors.email;
                } else {
                    $scope.message = result.message;
                }
            });

        };
    }])
});