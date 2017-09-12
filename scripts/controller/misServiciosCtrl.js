'use strict';
app.controller('misServiciosCtrl', misServiciosCtrl);

function misServiciosCtrl($rootScope,$scope,factoryTest,LayoutMisServiciosService,sessionService,Session,MisServiciosService,$cookieStore){
	$scope.bolsas=true;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=false;
	$scope.historicoroaming=false;

	var servicios=LayoutMisServiciosService.getLayout();
	//layoutservicios.$promise.then(function(servicios) {
		//console.debug(servicios);
		$scope.bolsastext=servicios.bolsas;
		$scope.recargastext=servicios.recargas;
		$scope.tab1=servicios.tab1;
		$scope.tab2=servicios.tab2;
		$scope.tab3=servicios.tab3;
		$scope.comprar = servicios.comprar;
		$scope.seleccione = servicios.seleccione;
		$scope.bolsas1=servicios.bolsas1;
		$scope.bolsas2=servicios.bolsas2;
		$scope.bolsas3=servicios.bolsas3;
		$scope.montorecargas = servicios.montorecargas;
		//$scope.complementarios=servicios.complementarios;
		//$scope.servicio=servicios.servicio;
		//$scope.fecha=servicios.fecha;
		//$scope.estado=servicios.estado;
		//$scope.accion=servicios.accion;
		//$scope.btnaccion=servicios.btnaccion;

		$scope.numeros = [$cookieStore.get('numeros')];
		$scope.numeroSeleccionado = $cookieStore.get('numeros');
	//});
	$scope.recargaNumero = function (){
		cargaNumero($scope.numeroSeleccionado);
	}
	
    var cargaNumero = function(numero){
		//sessionService.numeroActivo=numero;
		var data = MisServiciosService.getDatos(numero);
		data.$promise.then(function(result) { 
			console.debug("result");
			console.debug(result);
			$scope.servicios = result.servicios;
		});
	}
	$scope.bolsastab=function(){
		$scope.bolsas=true;
		$scope.bolsashistoricas=false;
		$scope.ventaroaming=false;
		$scope.historicoroaming=false;
	}
	$scope.bolsashistoricastab=function(){
		$scope.bolsas=false;
		$scope.bolsashistoricas=true;
		$scope.ventaroaming=false;
		$scope.historicoroaming=false;
	}
	$scope.ventaroamingtab=function(){
		$scope.bolsas=false;
		$scope.bolsashistoricas=false;
		$scope.ventaroaming=true;
		$scope.historicoroaming=false;
	}
	$scope.historicoroamingtab=function(){
		$scope.bolsas=false;
		$scope.bolsashistoricas=false;
		$scope.ventaroaming=false;
		$scope.historicoroaming=true;
	}
	$scope.comprarbolsa=function(seleccion,bolsa){
		console.debug("seleccion");
		console.debug(seleccion);
		console.debug("bolsa");
		console.debug(bolsa);
		MisServiciosService.setDatosbolsa(seleccion,bolsa,$cookieStore.get('numeros'));
	}
	$scope.recargaaccion=function(seleccion){
		console.debug("seleccion");
		console.debug(seleccion);
		MisServiciosService.setDatosrecarga(seleccion,bolsa,$cookieStore.get('numeros'));
	}
	$scope.recargaNumero();
}