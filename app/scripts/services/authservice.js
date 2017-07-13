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
          localStorage.setItem('usuario',JSON.stringify(firebaseUser));
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
    };

    this.logout = function(){
    	return authObj.$signOut();
    };

    this.createUser = function(user){
      authObj.$createUserWithEmailAndPassword(user.correo, user.password)
      .then(function(firebaseUser) {
        $state.go('login');
        console.log('Usuario creado');
      }).catch(function(error) {
        
        if(error.code ==='auth/email-already-in-use'){
            alert("El correo " + user.correo + " ya se encuentra registrado.");
        }else if(error.code === 'auth/invalid-email'){
            alert("Ingrese un correo válido.");
        }else{
            alert("Ocurrio un error al intentar crear tu usuario " + user.correo );
            console.log(error + " : CODE : " + error.code);
        }

      });  
    };



  }]);
