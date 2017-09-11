'use strict';
app.controller('miTraficoCtrl', miTraficoCtrl);

function miTraficoCtrl($rootScope,$scope,factoryTest,LayoutTraficoService,sessionService,MiTraficoService,Session,$cookieStore){

			$(function() {
                $("#knobvoz").knob({
					"readOnly": "true",
					'min':0,
    				'max':500
				});

				$("#knobdata").knob({
                	"readOnly": "true",
					'min':0,
    				'max':500
				});
				$("#knobsms").knob({
                	"readOnly": "true",
					'min':0,
    				'max':500
                });
			});
			var layouttrafico = LayoutTraficoService.getLayout();
			layouttrafico.$promise.then(function(layout) {	
				$scope.titulo1=layout.titulo1;
				$scope.voz=layout.voz;
				$scope.datos=layout.datos;
				$scope.sms=layout.sms;
				$scope.titulo2=layout.titulo2;
				$scope.fechainicio=layout.fechainicio;
				$scope.fechafin=layout.fechafin;
				$scope.descargar=layout.descargar;
				$scope.explicativo1=layout.explicativo1;
				$scope.titulo3=layout.titulo3;
				$scope.bajarexcel=layout.bajarexcel;
				$scope.fecha=layout.fecha;
				$scope.hora=layout.hora;
				$scope.destino=layout.destino;
				$scope.duracion=layout.duracion;
				$scope.tipo=layout.tipo;
				$scope.explicativo2=layout.explicativo2;
				$scope.descargas=layout.descargas;
				
			});
			$scope.numeros = [$cookieStore.get('numeros')];
			$scope.numeroSeleccionado = $cookieStore.get('numeros');

			$scope.recargaNumero = function (){
				cargaNumero($scope.numeroSeleccionado);
			}
			
			var cargaNumero = function(numero){
				sessionService.numeroActivo=numero;
				var datos = MiTraficoService.getTrafico(numero);

					datos.$promise.then(function(trafico) {
					$scope.fechainiciovalue = trafico.fechainicio;
					$scope.fechaterminovalue = trafico.fechatermino;
					$scope.detalles = trafico.detalle;
					$scope.vozvalue=trafico.voz;
					$scope.datavalue=trafico.data;
					$scope.smsvalue=trafico.sms;
					$(function() {
					$("#knobvoz").val($scope.vozvalue)
					.trigger('change');
					$("#knobdata").val($scope.datavalue)
					.trigger('change');
					$("#knobsms").val($scope.smsvalue)
					.trigger('change');
				});
			});
			}

			
			$scope.recargaNumero();
}