'use strict';
app.controller('misDatosCtrl', misDatosCtrl);

function misDatosCtrl($rootScope,$scope,factoryTest,sessionService,LayouHomeService,LayoutDatosService,Session,MisDatosService,LayoutBancosService,$cookieStore){

	var layoutdatos = LayoutDatosService.getLayout();
	$scope.cargobanco=true;
	$scope.cargotarjeta=false;
    //console.debug(layout);
	layoutdatos.$promise.then(function(layout) {
		$scope.titulo1=layout.titulo1;
		$scope.nombres=layout.nombres;
		$scope.apellidos=layout.apellidos;
		$scope.rut=layout.rut;
		$scope.celular=layout.celular;
		$scope.email=layout.email;
		$scope.guardar=layout.guardar;
		$scope.titulo2=layout.titulo2;
		$scope.calle=layout.calle;
		$scope.numero=layout.numero;
		$scope.region=layout.region;
		$scope.comuna=layout.comuna;
		$scope.editar=layout.editar;
		$scope.clave=layout.clave;
		$scope.enviarclave=layout.enviarclave;
		$scope.cambiarclave=layout.cambiarclave;
		$scope.contratos=layout.contratos;
		$scope.fehacreacion=layout.fehacreacion;
		$scope.nombredocumento=layout.nombredocumento;
		$scope.folio=layout.folio;
		$scope.archivo=layout.archivo;
		$scope.descargar=layout.descargar;
	});

	LayoutBancosService.getBancos(function(response) {                                     
		//console.debug(response.data);
		$scope.listadoBancos=response.data;
	},
	function(e) {
			
	});
	

	LayoutBancosService.getBancoTipoTarjetas(function(response) {                                     
		//console.debug(response.data);
		$scope.listadoTipoTarjetas=response.data;
	},
	function(e) {
			
	});

	var layoutdatos = LayoutBancosService.seleccionPagoService();
	layoutdatos.$promise.then(function(layout) {
		$scope.seleccion=layout.seleccion;
		$scope.banco=layout.banco;
		$scope.nombreTarjeta=layout.nombreTarjeta;
		$scope.numeroCuenta=layout.numeroCuenta;
		$scope.numeroTarjeta=layout.numeroTarjeta;
		$scope.cargobancotext="Cargo Bancario";
		$scope.cargotarjetatext="Cargo Tarjeta De Credito";
		$scope.tipoTarjeta="Tipo Tarjeta";

	});

	$scope.numeros = [$cookieStore.get('numeros')];
    $scope.numeroSeleccionado = $cookieStore.get('numeros');
	$scope.recargaNumero = function (){
		cargaNumero($scope.numeroSeleccionado);
	}

	$scope.guardadatosbanco = function(){
		
		$scope.cargobanco=true;
		$scope.cargotarjeta=false;     

		var data = {
			numLinea: $cookieStore.get('numeros'),
			numeroCtaCorriente: $scope.numeroCuentaValue,
			codigoBanco: $scope.bancoValue,
			codigoTipoTarjeta: $scope.tipoTarjetaValue,
			numeroTarjeta: $scope.numeroTarjetaValue,
			nombreTarjeta: $scope.nombreTarjetaValue,
			tipopago: ($scope.cargobanco)?true:false
		}
		MisDatosService.setBancosSeleccion(data,				
				function(response) {                                     
					console.debug(response);
					alert(response.data.descRetorno);
                },
                function(e) {
                     
                });
	}


	var cargaNumero = function(numero){
		//sessionService.numeroActivo=numero;
		
		var layoutdatos=MisDatosService.getDatos($cookieStore.get('numeroActivo'));
		layoutdatos.$promise.then(function(datos) {
			console.debug("datos");
			console.debug(datos);
			$scope.nombresvalue = datos.nombresvalue;
			$scope.apellidosvalue = datos.apellidosvalue;
			$scope.rutvalue = datos.rutvalue;
			$scope.celularvalue = datos.celularvalue;
			$scope.emailvalue= datos.emailvalue;

			$scope.callevalue=datos.callevalue;
			$scope.numerovalue=datos.numerovalue;
			$scope.regionvalue=datos.regionvalue;
			$scope.comunavalue=datos.comunavalue;
			$scope.bancoValue=datos.nombreBanco;
			$scope.numeroCuentaValue=datos.numerovalue;
			$scope.tipoTarjetaValue=datos.nombreTipoTarjeta;
			$scope.numeroTarjetaValue=datos.numeroTarjeta;
			$scope.nombreTarjetaValue=datos.nombresvalue;
			
			$scope.contratosactivos=datos.contratos;
		});	
	}

	$scope.cargobancotab=function(){
		$scope.cargobanco=true;
		$scope.cargotarjeta=false;
	}
	$scope.cargotarjetatab=function(){
		$scope.cargobanco=false;
		$scope.cargotarjeta=true;
	}

	$scope.recargaNumero();
}		