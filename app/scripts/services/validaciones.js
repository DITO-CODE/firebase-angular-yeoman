'use strict';

/**
 * @ngdoc service
 * @name firebaseAngularApp.validaciones
 * @description
 * # validaciones
 * Service in the firebaseAngularApp.
 */
angular.module('firebaseAngularApp')
  .service('validaciones',["reffirebase","$firebaseArray", function (reffirebase,$firebaseArray) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ref = reffirebase.getOnlyRef();
     
    this.validaCorreo = function(correo){
    	var promise = new Promise(function(resolve,reject){
	    	ref.orderByChild("correo").equalTo(correo).on("value",function(snapshot){
	    		if(snapshot.val() === null){
	    			resolve(true);
	    		}else{
	    			resolve(false);
	    		}
	    	});
   		 });

    	return promise;
    }  
   
    this.validaTelefono = function(telefono){
    	var promise = new Promise(function(resolve,reject){
	    	ref.orderByChild("telefono").equalTo(telefono).on("value",function(snapshot){
	    		if(snapshot.val() === null){
	    			resolve(true);
	    		}else{
	    			resolve(false);
	    		}
	    	});
   		 });

    	return promise;
    }  



  }]);
