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
      
      $scope.contacts.$loaded(function(x){
        x === $scope.contacts;
          
          if($scope.contactId !== null){
            $scope.contact = x.$getRecord($scope.contactId);
            $scope.valueButton = "Editar";
          }


      }).catch(function(error){
        console.log("Error " + error);
      });

  		this.addContact = function(){

        if($scope.contactId !== null){
          $scope.contacts.$save($scope.contact).then(function(ref){
            alert("Se actualizo el contacto " + $scope.contact.nombre + " " + $scope.contact.apellido);
            $scope.contact = {};
            $scope.valueButton="Agregar";
            $scope.contactId = null;
          });
        }else{
    			$scope.contacts.$add($scope.contact).then(function(ref){
    			 	//Si guardo vamos a reiniciar nuestro scope de contacto
    			 	$scope.contact = {};
    			},function(error){
    			 	alert("no se guardo");
    			});
        }
  			
  		}


  		
  	
  }]);
