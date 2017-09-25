
ecommerce.controller('shippingCtrl', shippingCtrl);

function shippingCtrl($scope, $state,LayouHomeService,productosService) {

    var shippinglayout = LayouHomeService.getLayout();
    shippinglayout.$promise.then(function(layout) {
        $scope.shipping=layout.shipping;
        $scope.titulocarro=layout.paso1;
        $scope.paso1=layout.paso1;
        $scope.paso2=layout.paso2;
        $scope.paso3=layout.paso3;
        $scope.nombres=layout.nombres;
        $scope.apellidos=layout.apellidos;
        $scope.direccion=layout.direccion;
        $scope.adicionales=layout.adicionales;
        $scope.ayuda=layout.ayuda;
        $scope.numero=layout.numero;
        $scope.llamanos=layout.llamanos;
        $scope.subtotal=layout.subtotal;
        $scope.despacho=layout.despacho;
        $scope.total=layout.total;
        $scope.pagar=layout.pagar;
    });
    
     $scope.carro = productosService.getCarro();
        var totalfinal=0;
        for(var producto in $scope.carro){
            totalfinal+=$scope.carro[producto].total;
        }
        $scope.subtotalval = totalfinal;
        $scope.totalval = totalfinal;

    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);


    }
}