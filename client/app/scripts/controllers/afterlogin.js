'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AfterloginCtrl
 * @description
 * # AfterloginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AfterloginCtrl', function ($scope, $http, AfterLogin, $location, $route, $rootScope) {

    $scope.comments=AfterLogin.getList().$object;
    if(!($rootScope.email)){
      alert('Please Login to view this page');
      $location.url('/login');
      return;
    }
    $scope.user = $rootScope.email.toString();

 $scope.submitcomment = function() {
    		$http
                          ({
                              method: 'POST',
                              url : 'http://localhost:3000/afterlogin',
                              data:{
                                  Comment:$scope.commenttxt,
                                  Email:$scope.user
                          }}).success(function() {
                              console.log('Success in fetching all users');
                              console.log($rootScope.email);
                              $route.reload();
                        })
                        .error(function() {
                                console.log('error in fetching all users');
                        });
 	
        };
 });
