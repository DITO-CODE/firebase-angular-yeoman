'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:CreateuserCtrl
 * @description
 * # CreateuserCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('CreateuserCtrl',["$scope","authService", function ($scope,authService) {
    
  		this.createUser = function(){
  			authService.createUser($scope.user);
  		};

  }]);
