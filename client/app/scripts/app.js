'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {

  RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/afterlogin', {
        templateUrl: 'views/afterlogin.html',
        controller: 'AfterloginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.factory('LoginRestangular',function(Restangular){
return Restangular.withConfig(function(RestangularConfigurer){
  RestangularConfigurer.setRestangularFields({
    id: '_id'//all this for changing _id to id
  });
 });
})
.factory('Login', function(LoginRestangular){
  return LoginRestangular.service('Login');//all this for adding capabilities to create new Login  
})
.factory('AfterLoginRestangular',function(Restangular){
return Restangular.withConfig(function(RestangularConfigurer){
  RestangularConfigurer.setRestangularFields({
    id: '_id'//all this for changing _id to id
  });
 });
})
.factory('AfterLogin', function(AfterLoginRestangular){
  return AfterLoginRestangular.service('AfterLogin');//all this for adding capabilities to create new Login  
});
