'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
    var userIndex=-1;

    $scope.checkLogin = function() {
  		$http.get('http://localhost:3000/login').success(function(data) {
                              for(var i = 0; i < data.length; i++){
                              	
                              	if(data[i].Username === angular.lowercase($scope.userLoginId)){
                              		userIndex = i;
                              		if(data[i].password === $scope.userPassword)
                              		{
                              			$rootScope.email=data[i].Username;
                              			console.log('Rootscope set Authenticated');
                              			$location.url('/afterlogin');
                              		}
                              		else
                              		{
                              			alert('You Entered wrong Password');
                              			console.log('Rootscope set Wrong Password');	
                              		}
                              	}
                              	
                            }
                            if(userIndex === -1){
			 	//$rootScope.Authenticated=404;
			 	alert('User Does Not exists in Database');
			 	console.log('Rootscope set Unauthorized user');
			 	}
	              })
                        .error(function() {
                                console.log('error in fetching all users'+'Email='+$scope.emailid+'Password='+$scope.passwd);
                        });
 	
 	};

  });
