'use strict';
app.controller('registroCtrl', registroCtrl);

function registroCtrl($rootScope,$scope,LayouHomeService2,LayoutRegistroService,$state){

	var layoutgeneral = LayouHomeService2.getLayout();
	$scope.mostrarDatos=false;
	$scope.tipo=0;
	layoutgeneral.$promise.then(function(layout) {	
		$scope.logoOficial = layout.logoOficial;
	});
	var layoutregistro = LayoutRegistroService.getLayout();
	
	layoutregistro.$promise.then(function(layoutLogin) {
		$scope.title=layoutLogin.title;
		$scope.tituloregistro=layoutLogin.tituloregistro;
		$scope.enviar=layoutLogin.enviar;
		$scope.yatienecuenta=layoutLogin.yatienecuenta;
		$scope.emailtext=layoutLogin.email;
		$scope.username=layoutLogin.username;
		$scope.password=layoutLogin.password;
	});

	$scope.registrar1=function(){	
		
		if($scope.codigobusqueda===undefined){
			console.debug("codigo vacio");
			return;
		}	
		var lineasmestras = LayoutRegistroService.getLineasMaestras($scope.codigobusqueda,$scope.tipo);	
		lineasmestras.$promise.then(function(data) {	
			console.debug(data);
			$scope.celulares=data.celulares;		
			$scope.mostrarDatos=true;
			$scope.numeroidentificacion=data.numIdent;
			$scope.codigoclienteesmero=data.codCliente;
			$scope.nombres=data.nombre;
			$scope.apellidos=data.apellidos;
			$scope.email=data.email;
			$scope.telefonofijo=data.telefono;
		});
	}
	$scope.valorultimomaestra=0;
	$scope.valoractualmaestra=function(data){
		//console.debug(data);
		$scope.valorultimomaestra=data;
	}
	$scope.registrarFinal=function(){
		/*$scope.numeromaestra;
		$scope.codigoclienteesmero;
		$scope.numeroidentificacion;
		$scope.nombres;
		$scope.apellidos;
		$scope.email;
		$scope.comuna;
		$scope.region;
		$scope.telefonofijo;
		$scope.fechanacimiento;*/

		var data = {
			paramUsuario: $scope.codigoclienteesmero,
			tipoUsuario: $scope.tipo,
			numMaestro: $scope.valorultimomaestra,
			codCliente: $scope.codigoclienteesmero,
			numIdent: $scope.numeroidentificacion,
			nombre: $scope.nombres,
			apellidos: $scope.apellidos,
			email: $scope.email,
			telefono: $scope.telefonofijo,
			fechaNacimiento: $scope.fechanacimiento
		}
		LayoutRegistroService.setRegistroCliente(data,				
				function(response) {          
					console.debug("response");                           
					console.debug(response);
					alert("Se ha registrado correctamente!");
					changeLocation('login.html',true);
                },
                function(e) {
					 console.debug("response e");
					 console.debug(e);
					 alert(e.data); 
                });
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