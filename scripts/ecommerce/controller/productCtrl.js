
ecommerce.controller('productCtrl', productCtrl);

function productCtrl($scope, $state,productosService,LayoutImagenTestService,LayouHomeService,$stateParams) {
    //console.debug($stateParams);
    var index = $stateParams.producto;
   console.debug(index);
   if(!index){
       $scope.redirect('catalog');
       return;
   }
    var productotab = productosService.getProducto(index);
    productotab.$promise.then(function(producto) {
        $scope.imagen=LayoutImagenTestService.getStandar();
        $scope.name=producto.name;
        $scope.descripcion=producto.descripcion;
        $scope.precioval = producto.precio;
    });
    var layoutserv = LayouHomeService.getLayout();
    layoutserv.$promise.then(function(layout) {
        $scope.addcart=layout.addcart;
        $scope.precio = layout.precio;
    });     

    $scope.agregaCarro = function (){
        productosService.agregaCarro(index);
       $scope.redirect('cart');
    }

    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}