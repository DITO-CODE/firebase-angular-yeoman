'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:ContactosCtrl
 * @description
 * # ContactosCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('ContactosCtrl', ["$scope","$firebaseArray","reffirebase","$state", function ($scope,$firebaseArray,reffirebase,$state){
    
    	 $scope.contacts = reffirebase.getRefContacts();

  		 //Cargamos la lista de nuestros contactos
  		 $scope.contacts.$loaded(function(x){
  		 	x === $scope.contacts;
  		 	$scope.list = x;
  		 }).catch(function(error){
  		 	console.log("Error " + error);
  		 });

  		 this.eliminar = function(index){
  		 	var contacto = $scope.contacts.$getRecord(index);

  		 	if(confirm("Desea eliminar a "+contacto.nombre + " " + contacto.apellido)){
  		 		$scope.contacts.$remove(contacto);
  		 	}
  		 }

  		 this.editar = function(index){
  		 	$state.go('agregar', {idContact: index});
  		 }
  }]);
