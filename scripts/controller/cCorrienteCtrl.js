'use strict';
app.controller('cCorrienteCtrl', cCorrienteCtrl);

function cCorrienteCtrl($rootScope,$scope,factoryTest,LayoutCorrienteService,CorrienteService,Session){

    var layout = LayoutCorrienteService.getLayout();
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

    var data = CorrienteService.getDatos(1234);

    $scope.saldo1value = data.saldo1;
    $scope.saldo2value = data.saldo2;
    $scope.saldo3value = data.saldo3;

    $scope.movimientos = data.movimientos;

        

}