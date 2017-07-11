'use strict';

/**
 * @ngdoc service
 * @name firebaseAngularApp.reffirebase
 * @description
 * # reffirebase
 * Service in the firebaseAngularApp.
 */
angular.module('firebaseAngularApp')
  .service('reffirebase',["$firebaseArray","authService", function ($firebaseArray,authService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var usuario = authService.getAuth();
    var correo = usuario.email.replace("@","_").replace(".","_");

    this.getRefContacts = function(){
    	var ref =  firebase.database().ref("/contacts/"+correo);
    	return $firebaseArray(ref);
    };

    this.getOnlyRef = function(){
    	return firebase.database().ref("/contacts/"+correo);
    }

  }]);
