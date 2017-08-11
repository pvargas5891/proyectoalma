'use strict';
app.controller('loginCtrl', loginCtrl);

function loginCtrl($rootScope,$scope,LayouHomeService2,LayoutLoginService,AuthSharedService	,$state){

	var layout = LayouHomeService2.getLayout();
	$scope.logoOficial = layout.logoOficial;

	var layoutLogin = LayoutLoginService.getLayout();
	

	$scope.title=layoutLogin.title;
	$scope.usuario=layoutLogin.usuario;
	$scope.password=layoutLogin.password;
	$scope.tituloLogin=layoutLogin.tituloLogin;
	$scope.recuerdame=layoutLogin.recuerdame;
	$scope.entrar=layoutLogin.entrar;
	$scope.perdistepassword=layoutLogin.perdistepassword;
	$scope.crearcuenta=layoutLogin.crearcuenta;

	$scope.login = function(){

			
		var data = {
                "username": $scope.user,
                "password": $scope.pass,
                "rememberme": false,
                "tipoLogin": 1
            };
		AuthSharedService.login(data,
			function (response){
				changeLocation('index.html',true);
			},
			function (e){
				console.debug("Error de autentificacion");
				console.debug(e);
				//$location.path("/home");
			}
		);
	}

	var changeLocation = function(url, forceReload) {
		$scope = $scope || angular.element(document).scope();
		if(forceReload || $scope.$$phase) {
			window.location = url;
		}
		else {
			//only use this if you want to replace the history stack
			//$location.path(url).replace();

			//this this if you want to change the URL and add it to the history stack
			$location.path(url);
			$scope.$apply();
		}
		};
}