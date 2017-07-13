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
    

    var getRefUsuario = function(){
        var usuario = JSON.parse(localStorage.getItem('usuario'));
        var correo = usuario.email.replace("@","_").replace(".","_");
        return correo;
    }

    this.getRefContacts = function(){
    	var ref =  firebase.database().ref("/contacts/"+getRefUsuario());
    	return $firebaseArray(ref);
    };

    this.getOnlyRef = function(){
    	return firebase.database().ref("/contacts/"+getRefUsuario());
    };

  }]);
