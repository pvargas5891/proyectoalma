'use strict';
app.controller('facturacionCtrl', facturacionCtrl);

function facturacionCtrl($rootScope,$scope,factoryTest,LayoutFacturacionService,MiFacturacionService,Session){
     
var factura=LayoutFacturacionService.getLayout("6463j");
$scope.titulo=factura.titulo;
$scope.folio=factura.folio;
$scope.emision=factura.emision;
$scope.vencimiento=factura.vencimiento;
$scope.monto=factura.monto;
$scope.estado=factura.estado;
$scope.factura=factura.factura;
$scope.verbtn=factura.verbtn;

var data = MiFacturacionService.getDatos();
$scope.facturas=data.facturas;

}