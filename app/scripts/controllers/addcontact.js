'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:AddcontactCtrl
 * @description
 * # AddcontactCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('AddcontactCtrl',["$scope","$firebaseArray", function ($scope,$firebaseArray) {
  		
  
  		 var ref=firebase.database().ref("/contacts");
  		 $scope.contacts =$firebaseArray(ref);

  		 //Cargamos la lista de nuestros contactos
  		 $scope.contacts.$loaded(function(x){
  		 	x === $scope.contacts;
  		 	$scope.list = x;
  		 }).catch(function(error){
  		 	console.log("Error " + error);
  		 });

  		this.addContact = function(){

  			  $scope.contacts.$add($scope.contact).then(function(ref){
  			 	//Si guardo vamos a reiniciar nuestro scope de contacto
  			 	$scope.contact = {};
  			 },function(error){
  			 	alert("no se guardo");
  			 });
  			
  		}


  		
  	
  }]);
