'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:AddcontactCtrl
 * @description
 * # AddcontactCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('AddcontactCtrl',["$scope","$firebaseArray","reffirebase","$stateParams", function ($scope,$firebaseArray,reffirebase,$stateParams) {
  		
      $scope.contacts = reffirebase.getRefContacts();

      $scope.contactId = $stateParams.idContact;
      $scope.valueButton = "Agregar";

      console.log($scope.contactId);

      if($scope.contactId !== null){

        $scope.valueButton = "Editar";
        $scope.contact = $scope.contacts.$getRecord($scope.contactId);
        console.log($scope.contacts.$getRecord($scope.contactId));
      }
  		 
  		

  		this.addContact = function(){

  			  $scope.contacts.$add($scope.contact).then(function(ref){
  			 	//Si guardo vamos a reiniciar nuestro scope de contacto
  			 	$scope.contact = {};
  			 },function(error){
  			 	alert("no se guardo");
  			 });
  			
  		}


  		
  	
  }]);
