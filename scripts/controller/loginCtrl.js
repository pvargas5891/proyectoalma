'use strict';
app.controller('loginCtrl', loginCtrl);

function loginCtrl($rootScope,$scope,LayouHomeService,Session,AuthSharedService,$location,$timeout){

	$scope.nomostrar=false;
	//$scope.content="content-page";
	$scope.content="";
	$scope.login = function(){
		$timeout(function () {
		   $location.path('/home'); 
		}, 0);
		/*var data = {
                "username": $scope.usuario,
                "password": $scope.password,
                "rememberme": false,
                "tipoLogin": 1
            };
		AuthSharedService.login(data,
			function (response){
				console.debug(response);
			},
			function (e){
				console.debug("Error de autentificacion");
				console.debug(e);
				//$location.path("/home");
			}
		);*/
	}
}