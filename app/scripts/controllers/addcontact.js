'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:AddcontactCtrl
 * @description
 * # AddcontactCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('AddcontactCtrl', function ($scope,$firebaseObject) {
  		
  		$scope.contact = {
  			nombre:"",
  			apellido:"",
  			telefono:""
  		}

  		var ref = firebase.database().ref();


  		this.addContact = function(){
  			let obj = $firebaseObject(ref);
  			obj.contacto =$scope.contact;

  			console.log(obj);

  			obj.$save().then(function(ref){
  				ref.key === obj.$id;
  				alert("Guardo " + obj.$id);
  			},function(error){
  				alert("Error " + error);
  			});
  			//Lo agregamos a la base de datos de firebase
  		}
  });
