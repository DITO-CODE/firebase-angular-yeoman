'use strict';

/**
 * @ngdoc service
 * @name firebaseAngularApp.reffirebase
 * @description
 * # reffirebase
 * Service in the firebaseAngularApp.
 */
angular.module('firebaseAngularApp')
  .service('reffirebase',["$firebaseArray", function ($firebaseArray) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getRefContacts = function(){
    	let ref =  firebase.database().ref("/contacts");
    	return $firebaseArray(ref);
    };


  }]);
