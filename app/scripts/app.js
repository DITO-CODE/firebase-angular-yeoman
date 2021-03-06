'use strict';

/**
 * @ngdoc overview
 * @name firebaseAngularApp
 * @description
 * # firebaseAngularApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseAngularApp', ['ui.router',"firebase"])
  .config(function($stateProvider){

  	 var config = {
        apiKey: "AIzaSyChw4ZYW8Xn9MT8qwH0y1l8kAwWVDFBp4w",
        authDomain: "contacts-1922c.firebaseapp.com",
        databaseURL: "https://contacts-1922c.firebaseio.com",
        projectId: "contacts-1922c",
        storageBucket: "contacts-1922c.appspot.com",
        messagingSenderId: "541757310409"
      };
      firebase.initializeApp(config);
  		
  		$stateProvider.state('agregar',{
  			url:'/agregar',
  			templateUrl: 'views/addcontact.html',
  			controller:'AddcontactCtrl as addCtrl',
        params:{
          idContact : null
        }
  		})
      .state('mostrar',{
        url:'/contactos',
        templateUrl:'views/showcontacts.html',
        controller:'ContactosCtrl as showContactCtrl'
      })
      .state('login',{
        url:'/login',
        templateUrl:'views/login.html',
        controller: 'LoginCtrl as loginCtrl'
      }).state('signin',{
        url:'/signin',
        templateUrl:'views/sigin.html',
        controller:'CreateuserCtrl as signinCtrl'
      });
  })
  .run(function($rootScope,$location,$state,authService){
      $rootScope.usuario =  JSON.parse(localStorage.getItem('usuario'));
      
      $rootScope.$on(function(event) {
        console.log(event);
      });

      $rootScope.$on('$locationChangeStart', function() {
       // console.log($location.path());
        //Aquí validamos que el usuario se encuentre 
          var usuario = JSON.parse(localStorage.getItem('usuario'));
         
          //console.log($rootScope.usuario);
          var publicPages = ['/login','/signin'];
          var restrictedPage = publicPages.indexOf($location.path()) === -1;
         // console.log(restrictedPage);
          if (restrictedPage && usuario==null) {
              $state.go('login');
          }else{
             $rootScope.usuario = usuario;
          }
      });

      $rootScope.log = function(){
        authService.logout().then(function(){
          $rootScope.usuario=null;

          localStorage.removeItem('usuario');
          //console.log("cerro sesion");
          $state.go('login');
        });
       
      };
   
  });
