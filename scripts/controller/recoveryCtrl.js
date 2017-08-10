'use strict';
app.controller('recoveryCtrl', recoveryCtrl);

function recoveryCtrl($rootScope,$scope,LayouHomeService2,LayoutRecoveryService,AuthSharedService,$state){

	var layout = LayouHomeService2.getLayout();
	$scope.logoOficial = layout.logoOficial;

	var layoutLogin = LayoutRecoveryService.getLayout();
	

	$scope.title=layoutLogin.title;
	$scope.titulorecupera=layoutLogin.titulorecupera;
	$scope.instrucciones=layoutLogin.instrucciones;
	$scope.enviar=layoutLogin.enviar;
	$scope.yalaencontro = layoutLogin.yalaencontro;

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