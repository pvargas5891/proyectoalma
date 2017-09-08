'use strict';
app.controller('misServiciosCtrl', misServiciosCtrl);

function misServiciosCtrl($rootScope,$scope,factoryTest,LayoutMisServiciosService,sessionService,Session,MisServiciosService){
	$scope.bolsas=true;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=false;
	$scope.historicoroaming=false;

	var layoutservicios=LayoutMisServiciosService.getLayout();
	layoutservicios.$promise.then(function(servicios) {
		$scope.bolsastext=servicios.bolsas;
		$scope.tab1=servicios.tab1;
		$scope.tab2=servicios.tab2;
		$scope.tab3=servicios.tab3;
		$scope.tab4=servicios.tab4;

		$scope.complementarios=servicios.complementarios;
		$scope.servicio=servicios.servicio;
		$scope.fecha=servicios.fecha;
		$scope.estado=servicios.estado;
		$scope.accion=servicios.accion;
		$scope.btnaccion=servicios.btnaccion;
		$scope.numeros = sessionService.numeros;
		$scope.numeroSeleccionado = sessionService.numeros[0];
	});
	$scope.recargaNumero = function (){
		cargaNumero($scope.numeroSeleccionado);
	}
	
    var cargaNumero = function(numero){
		sessionService.numeroActivo=numero;
		var data = MisServiciosService.getDatos(43534);
		$scope.servicios = data.servicios;
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
	$scope.recargaNumero();
}