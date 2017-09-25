'use strict';
app.controller('loginCtrl', loginCtrl);

function loginCtrl($rootScope,$scope,LayouHomeService2,authService,store,LayoutLoginService,AuthSharedService,Session,$state,$cookieStore){

	var layout = LayouHomeService2.getLayout();
	$scope.logoOficial = layout.logoOficial;
	$scope.user=5525627;
	//$scope.pass=1234;
	var layoutLoginSrc = LayoutLoginService.getLayout();
	//console.debug(layoutLogin);
	layoutLoginSrc.$promise.then(function(layoutLogin) {
		console.log(layoutLogin);
		$scope.title=layoutLogin.title;
		$scope.usuario=layoutLogin.usuario;
		$scope.password=layoutLogin.password;
		$scope.tituloLogin=layoutLogin.tituloLogin;
		$scope.recuerdame=layoutLogin.recuerdame;
		$scope.entrar=layoutLogin.entrar;
		$scope.perdistepassword=layoutLogin.perdistepassword;
		$scope.crearcuenta=layoutLogin.crearcuenta;
	});
	

	$scope.login = function(){

		AuthSharedService.login($scope.user, $scope.pass, false, 0).then(
			function(data, status, headers, config, response) {
				//console.log('autenticacion OK config');
				//console.log(data.config);
				//console.log('Cookie END');
				
				console.log("data login");
				console.log(data);
				$cookieStore.put('nombres',data.data.nombre);
				$cookieStore.put('rut',data.data.login);
				$cookieStore.put('apellidos',data.data.apellido);
				$cookieStore.put('email',data.data.correo);
				$cookieStore.put('numeros',data.data.celulares);
				$cookieStore.put('telefono',data.data.telefono);
				$cookieStore.put('textoPagado',data.data.textoPagado);
				$cookieStore.put('estado',1);
	
				store.set('jwt', data.data.token);
				//console.log('obteniendo del store');
				//console.log(store.get('jwt'));
				$rootScope.authenticationError = false;
				authService.loginConfirmed(data);
				changeLocation('portal.html',true);
				
			  // success callback
			}, 
			function(data, status, headers, config) {

				//changeLocation('portal.html',true);

				console.log('Error post');
				console.log(data);
				console.log('carta1');
				$rootScope.authenticationError = true;
				Session.invalidate();
				
			  // failure callback
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