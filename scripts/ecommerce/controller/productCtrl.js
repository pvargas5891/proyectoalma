
ecommerce.controller('productCtrl', productCtrl);

function productCtrl($scope, $state,productosService,LayoutImagenTestService,LayouHomeService,$stateParams) {
    //console.debug($stateParams);
    var index = $stateParams.producto;
    var productosCarroVisualtmp = "";
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
        productosCarroVisualtmp={
            "id":index,
            "name":producto.name,
            "precio":producto.precio,
            "descripcion":producto.descripcion,
            "imagen":producto.imagen
        }
    });
    var layoutserv = LayouHomeService.getLayout();
    layoutserv.$promise.then(function(layout) {
        $scope.addcart=layout.addcart;
        $scope.precio = layout.precio;
    });     

    $scope.agregaCarro = function (){
        productosService.agregaCarro(productosCarroVisualtmp);
       $scope.redirect('cart');
    }

    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}