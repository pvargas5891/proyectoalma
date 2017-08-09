'use strict';
app.controller('misEquipoCtrl', misEquipoCtrl);

function misEquipoCtrl($rootScope,$scope,factoryTest,LayoutMiEquipoService,MiEquipoService,Session){

    var layout = LayoutMiEquipoService.getLayout();
    $scope.tuplan=layout.tuplan;
    $scope.bajada=layout.bajada;
    $scope.subida=layout.subida;
    $scope.precio=layout.precio;
    $scope.modelo=layout.modelo;
    $scope.caracteristicas=layout.caracteristicas;
    $scope.pinpuk=layout.pinpuk;
    $scope.pin=layout.pin;
    $scope.puk=layout.puk;    

    var data = MiEquipoService.getDatos(4342);

    $scope.planvalue=data.planvalue;
    $scope.bajadavalue=data.bajadavalue;
    $scope.subidavalue=data.subidavalue;
    $scope.preciovalue=data.preciovalue;
    $scope.caracteristicasvalue=data.caracteristicasvalue;
    $scope.pinvalue=data.pinvalue;
    $scope.pukvalue=data.pukvalue;
	
}