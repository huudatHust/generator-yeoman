'use strict';

/**
 * @ngdoc function
 * @name generatorYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorYeomanApp
 */
 app.controller('MainCtrl', function ($scope) {
    $scope.welcome = "Welcome to admin itbee !";
    $scope.call = function(){
    	alert("hello");
    }
  });
