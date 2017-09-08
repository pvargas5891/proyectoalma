'use strict';
app.controller('cCorrienteCtrl', cCorrienteCtrl);

function cCorrienteCtrl($rootScope,$scope,factoryTest,LayoutCorrienteService,sessionService,CorrienteService,Session){

    var layoutdatos = LayoutCorrienteService.getLayout();

    layoutdatos.$promise.then(function(layout) {
        $scope.movimiento = layout.movimiento;
        $scope.saldo1 = layout.saldo1;
        $scope.saldo2 = layout.saldo2;
        $scope.saldo3 = layout.saldo3;
        $scope.bajarexcel = layout.bajarexcel;
        $scope.bajarpdf = layout.bajarpdf;
        $scope.tipo = layout.tipo;
        $scope.emision = layout.emision;
        $scope.vencimiento = layout.vencimiento;
        $scope.monto = layout.monto;
        $scope.estado = layout.estado;
        $scope.numeros = sessionService.numeros;
        $scope.numeroSeleccionado = sessionService.numeros[0];

    });
    $scope.recargaNumero = function (){
        cargaNumero($scope.numeroSeleccionado);
    }
   
    var cargaNumero = function(numero){
		sessionService.numeroActivo=numero;
        var data = CorrienteService.getDatos(numero);

        $scope.saldo1value = data.saldo1;
        $scope.saldo2value = data.saldo2;
        $scope.saldo3value = data.saldo3;

        $scope.movimientos = data.movimientos;
    }
     $scope.recargaNumero();

}