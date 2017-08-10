'use strict';
app.controller('registroCtrl', registroCtrl);

function registroCtrl($rootScope,$scope,LayouHomeService2,LayoutRegistroService,AuthSharedService,$state){

	var layout = LayouHomeService2.getLayout();
	$scope.logoOficial = layout.logoOficial;

	var layoutLogin = LayoutRegistroService.getLayout();
	

	$scope.title=layoutLogin.title;
	$scope.tituloregistro=layoutLogin.tituloregistro;
	$scope.enviar=layoutLogin.enviar;
	$scope.yatienecuenta=layoutLogin.yatienecuenta;

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