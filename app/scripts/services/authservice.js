'use strict';

/**
 * @ngdoc service
 * @name firebaseAngularApp.authService
 * @description
 * # authService
 * Service in the firebaseAngularApp.
 */
angular.module('firebaseAngularApp')
  .service('authService',["$firebaseAuth","$state", function ($firebaseAuth,$state) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var authObj = $firebaseAuth();

    this.login = function(correo,clave){
    	authObj.$signInWithEmailAndPassword(correo, clave).then(function(firebaseUser) {
		  $state.go('mostrar');
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
    };

    this.getAuth = function(){
    	var firebaseUser = authObj.$getAuth();

    	return firebaseUser;
    };

    this.getAuthObj = function(){
    	return authObj;
    }

    this.logout = function(){
    	authObj.$signOut();
    }

  }]);
