'use strict';
app.controller('misEquipoCtrl', misEquipoCtrl);

function misEquipoCtrl($rootScope,$scope,factoryTest,LayoutMiEquipoService,MiEquipoService,Session,sessionService){

    var layoutequipo = LayoutMiEquipoService.getLayout();
    layoutequipo.$promise.then(function(layout) {
        $scope.tuplan=layout.tuplan;
        $scope.bajada=layout.bajada;
        $scope.subida=layout.subida;
        $scope.precio=layout.precio;
        $scope.modelo=layout.modelo;
        $scope.caracteristicas=layout.caracteristicas;
        $scope.pinpuk=layout.pinpuk;
        $scope.pin=layout.pin;
        $scope.puk=layout.puk;    
        $scope.numeros = sessionService.numeros;
        $scope.numeroSeleccionado = sessionService.numeros[0];
    });
    $scope.recargaNumero = function (){
        cargaNumero($scope.numeroSeleccionado);
    }
    
    var cargaNumero = function(numero){
		sessionService.numeroActivo=numero;
        var data = MiEquipoService.getDatos(numero);

        $scope.planvalue=data.planvalue;
        $scope.bajadavalue=data.bajadavalue;
        $scope.subidavalue=data.subidavalue;
        $scope.preciovalue=data.preciovalue;
        $scope.caracteristicasvalue=data.caracteristicasvalue;
        $scope.pinvalue=data.pinvalue;
        $scope.pukvalue=data.pukvalue;
    }
    $scope.recargaNumero();
}