'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('LoginCtrl', ["$scope","authService", function ($scope,authService) {
    	
    	this.login = function(){
    		//console.log($scope.user);
    		authService.login($scope.user.correo,$scope.user.pass);
    	};
  }]);
