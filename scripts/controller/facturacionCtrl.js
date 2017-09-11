'use strict';
app.controller('facturacionCtrl', facturacionCtrl);

function facturacionCtrl($rootScope,$scope,factoryTest,LayoutFacturacionService,sessionService,MiFacturacionService,Session,$cookieStore){
     
    var layoutdatos=LayoutFacturacionService.getLayout();

    layoutdatos.$promise.then(function(factura) {

        $scope.titulo=factura.titulo;
        $scope.folio=factura.folio;
        $scope.emision=factura.emision;
        $scope.vencimiento=factura.vencimiento;
        $scope.monto=factura.monto;
        $scope.estado=factura.estado;
        $scope.factura=factura.factura;
        $scope.verbtn=factura.verbtn;
        $scope.numeros = [$cookieStore.get('numeros')];
        $scope.numeroSeleccionado = $cookieStore.get('numeros');
        
    });

    $scope.recargaNumero = function (){
        cargaNumero($scope.numeroSeleccionado);
    }
    
    var cargaNumero = function(numero){
        //sessionService.numeroActivo=numero;
        
        var data = MiFacturacionService.getDatos(numero);
        data.$promise.then(function(facturacion) { 
            
            $scope.facturas=facturacion.facturas;
        }); 
    }
    $scope.recargaNumero();
}