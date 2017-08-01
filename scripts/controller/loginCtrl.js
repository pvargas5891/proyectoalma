'use strict';
app.controller('loginCtrl', loginCtrl);

function loginCtrl($rootScope,$scope,LayouHomeService,Session,AuthSharedService,$state,$timeout){

	$scope.login = function(){
		
		   $state.go('home'); 
		
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