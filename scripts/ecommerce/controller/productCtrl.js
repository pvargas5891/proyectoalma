
ecommerce.controller('productCtrl', productCtrl);

function productCtrl($scope, $state,productosService,LayoutImagenTestService,LayouHomeService,$stateParams) {
    console.debug($stateParams);
    var index = $stateParams.producto;
    var producto = productosService.getProducto(index);
    $scope.imagen=LayoutImagenTestService.getStandar();;
    $scope.name=producto.name;
    $scope.descripcion=producto.descripcion;
    $scope.precioval = producto.precio;
    var layout = LayouHomeService.getLayout();
    $scope.addcart=layout.addcart;
    $scope.precio = layout.precio;
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}