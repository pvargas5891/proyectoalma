
ecommerce.controller('cartCtrl', cartCtrl);

function cartCtrl($scope, $state,LayouHomeService,productosService,LayoutImagenTestService,$cookieStore) {

        var layoutcart = LayouHomeService.getLayout();
        layoutcart.$promise.then(function(layout) {
            $scope.volver=layout.volver;
            $scope.titulocarro=layout.titulocarro;
            $scope.numero=layout.numero;
            $scope.cantidad=layout.cantidad;
            $scope.precio=layout.precio;
            $scope.subtotal=layout.subtotal;
            $scope.despacho=layout.despacho;
            $scope.total=layout.total;
            $scope.pagar=layout.pagar;
        });

        var carro = productosService.getCarro();
        $scope.carro=carro.productos[0];

        $scope.imagen = LayoutImagenTestService.getStandar();
        $scope.subtotalval = carro.subtotal;
        $scope.totalval = carro.total;

    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
    $scope.vaciarCarro = function (){
        var productosCarrito = new Array();
        $cookieStore.put('carrito',productosCarrito);  
        $scope.redirect('catalog');
    }
}