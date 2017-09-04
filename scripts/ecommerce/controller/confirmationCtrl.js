
ecommerce.controller('confirmationCtrl', confirmationCtrl);

function confirmationCtrl($scope, $state,LayouHomeService,productosService) {
    var layout = LayouHomeService.getLayout();
    $scope.titulo=layout.paso3;
    $scope.paso1=layout.paso1;
    $scope.paso2=layout.paso2;
    $scope.paso3=layout.paso3;
    $scope.ayuda=layout.ayuda;
    $scope.tituloconfirmacion = layout.tituloconfirmacion;
    $scope.agradecimiento = layout.agradecimiento;
    $scope.recibirasunemail = layout.recibirasunemail;
    $scope.numero=layout.numero;
    $scope.llamanos=layout.llamanos;
    $scope.subtotal=layout.subtotal;
    $scope.despacho=layout.despacho;
    $scope.total=layout.total;
    $scope.pagar=layout.pagar;

    
    var carro = productosService.getCarro();
    $scope.subtotalval = carro.subtotal;
    $scope.despachoval = carro.despacho;
    $scope.totalval = carro.total;
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}