'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $http, $route, $location) {
 	$scope.Status = -1;

 	$scope.getUsersList = function()
 	{
        	  $http.get('http://localhost:3000/login')
        	 .success(function(data){
        	 	$scope.checkUserExists(data);
        	 	return;
        	 })
        	 .error(function(){
        	 	console.log('error');
        	 	return;
        	 });
        };


 	$scope.submitRequest = function() {
  	
  		$scope.getUsersList();//Creates User if not exists
  		//$scope.showMessage();// show message of user creation or existance
 	};

       
 	$scope.checkUserExists = function(data){

		for(var i = 0; i < data.length; i++){
                              	
                   	if(data[i].Username === $scope.emailid){
                               	$scope.Status = 200;
                        	break;                              		
                        }
               }

               if($scope.Status === -1){
               	$scope.checkparam();
               	return;
               }
               else{
               		$scope.showMessage();
               		$route.reload();
               		return;
               }
 
 	};

	$scope.checkparam = function(){
		console.log('within check param');
		if(!($scope.emailid)||!($scope.passwd)){
			$scope.Status = 500;
 			$scope.showMessage();
 			$route.reload();
 			return;
 		}
 		//safe to call create user
 		$scope.createUser();
 		return;
	};

 	$scope.showMessage = function(){
 		
 		if($scope.Status === 500){
 			alert('Both field are mandatory and Email Id mus be valid');
 		}else if($scope.Status === 200){
 			alert('Users Exists in Database Please chose another Username');
 		}else if($scope.Status === 1000){
 			alert('Connection to database is lost');
 		}else if($scope.Status === -1){
 			alert('User Created Sucessfully Please Login Now');
 		}
 		return;
 	};

 	$scope.createUser = function(){
 		
 		$http
                          ({
                              method: 'POST',
                              url : 'http://localhost:3000/Login',
                              data:{
                                  Username:angular.lowercase($scope.emailid),
                                  password:$scope.passwd
                          }}).success(function() {
                              console.log('Success in fetching all users');
                              $scope.showMessage();
                              $location.url('/login');
                        })
                        .error(function() {
                        	$scope.Status = 1000;
                        	$scope.showMessage();
                                console.log('error in fetching all users'+'Email='+$scope.emailid+'Password='+$scope.passwd);
                                return;
                        });
 	};

 });
