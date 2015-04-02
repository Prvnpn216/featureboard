'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AfterloginCtrl
 * @description
 * # AfterloginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AfterloginCtrl', function ($scope, $http, Login, $route, $rootScope) {

    $scope.comments=Login.getList().$object;

 $scope.submitcomment = function() {

 		$http
                          ({
                              method: 'POST',
                              url : 'http://localhost:3000/Login',
                              data:{
                                  Username:$scope.commenttxt,
                                  password:'e@w.com'
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
