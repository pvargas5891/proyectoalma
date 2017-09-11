'use strict';
app.controller('misServiciosCtrl', misServiciosCtrl);

function misServiciosCtrl($rootScope,$scope,factoryTest,LayoutMisServiciosService,sessionService,Session,MisServiciosService,$cookieStore){
	$scope.bolsas=true;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=false;
	$scope.historicoroaming=false;

	/*
	
	var objeto = {
            "bolsas":"Bolsas",
            "recargas":"Recargas",
            "tab1":"Para Hblar y navegar",
            "tab2":"Para Hablar",
            "tab3":"Bolsa de mensajes",
            "comprar":"Comprar",
            "seleccione":"Seleccione el monto a recargar",
            "bolsasvalue": [
                        {"id":"1","internet":"Internet","internatvalor":"200MB","minutos":"Minutos","minutosvalor":"25","vigencia":"Vigencia","vigenciavalor":"7 días","valor":"Valor","valorvalor":"15000"},
                        {"id":"2","internet":"Internet","internatvalor":"300MB","minutos":"Minutos","minutosvalor":"30","vigencia":"Vigencia","vigenciavalor":"8 días","valor":"Valor","valorvalor":"20000"},
                        {"id":"3","internet":"Internet","internatvalor":"400MB","minutos":"Minutos","minutosvalor":"35","vigencia":"Vigencia","vigenciavalor":"9 días","valor":"Valor","valorvalor":"25000"},
                        {"id":"4","internet":"Internet","internatvalor":"500MB","minutos":"Minutos","minutosvalor":"40","vigencia":"Vigencia","vigenciavalor":"10 días","valor":"Valor","valorvalor":"30000"}                       
                    ],
            "montorecargas":  [
                  {"id":"1","monto":"$1.000"},
                  {"id":"2","monto":"$2.000"},
                  {"id":"3","monto":"$4.000"},
                  {"id":"4","monto":"$5.000"},
                  {"id":"5","monto":"$10.000"}
                 ]       
            };
	
	*/
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
	$scope.recargaNumero();
}