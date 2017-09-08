'use strict';
app.controller('facturacionCtrl', facturacionCtrl);

function facturacionCtrl($rootScope,$scope,factoryTest,LayoutFacturacionService,sessionService,MiFacturacionService,Session){
     
    var layoutdatos=LayoutFacturacionService.getLayout("6463j");

    layoutdatos.$promise.then(function(factura) {

        $scope.titulo=factura.titulo;
        $scope.folio=factura.folio;
        $scope.emision=factura.emision;
        $scope.vencimiento=factura.vencimiento;
        $scope.monto=factura.monto;
        $scope.estado=factura.estado;
        $scope.factura=factura.factura;
        $scope.verbtn=factura.verbtn;
        $scope.numeros = sessionService.numeros;
        $scope.numeroSeleccionado = sessionService.numeros[0];
        
    });
    $scope.recargaNumero = function (){
        cargaNumero($scope.numeroSeleccionado);
    }
    
    var cargaNumero = function(numero){
        sessionService.numeroActivo=numero;
        var data = MiFacturacionService.getDatos(numero);
        $scope.facturas=data.facturas;
    }
    $scope.recargaNumero();
}