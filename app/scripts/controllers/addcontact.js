'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:AddcontactCtrl
 * @description
 * # AddcontactCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('AddcontactCtrl',["$scope","$firebaseArray","reffirebase","$stateParams","validaciones",
   function ($scope,$firebaseArray,reffirebase,$stateParams,validaciones) {
  		
      $scope.contacts = reffirebase.getRefContacts();
      $scope.contactId = $stateParams.idContact;
      $scope.valueButton = "Agregar";
      
      $scope.contacts.$loaded(function(x){
      
          if($scope.contactId !== null){
            $scope.contact = x.$getRecord($scope.contactId);
            $scope.contactCambio = $scope.contact;
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

          //Verficamos sin el correo o el telefono cambio
        //  if($scope.contactCambio.correo !== $scope.contact.correo){
            //El correo cambio
          //}

         // if($scope.contactCambio.telefono !== $scope.contact.telefono){
           
          //}
         
          verificaCorreoTelefono().then(function(result){

                if(result === true){
        			$scope.contacts.$add($scope.contact).then(function(ref){
        			 	//Si guardo vamos a reiniciar nuestro scope de contacto
        			 	$scope.contact = {};
        			},function(error){
        			 	alert("no se guardo");
        			});
            }else{
              alert(result);
            }

          });


        }
  			
  		};

    
      var verificaCorreoTelefono = function(){
        //Verificamos que el correo y el telefono no exista en otro contacto.
        var promise =new Promise(function(resolve,reject){
          validaciones.validaCorreo($scope.contact.correo).then(function(result){
            console.log(result);
              if(!result){
                resolve("El correo "+$scope.contact.correo+" ya se encuentra asignado a otro contacto.");
              }else{
                validaciones.validaTelefono($scope.contact.telefono).then(function(result){
                  if(!result){
                    resolve("El telefono " + $scope.contact.telefono+" ya se encuentra asignado a otro contacto.");
                  }else{
                    //el correo y el telefono no existen
                    resolve(true);
                  }

                });
              }
          });
        });

        return promise;

      };

  		
  	
  }]);
