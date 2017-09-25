
ecommerce.controller('catalogCtrl', catalogCtrl);

function catalogCtrl($scope, $state,$cookieStore, LayouHomeService,LayoutImagenTestService,productosService) {
   /*LayouHomeService.getLayout().$promise.then(function (data) {
        console.debug(data);
        //$scope.listadoMenu=data.menues;
    });   */
    var layoutcatalogo = LayouHomeService.getLayout();

    layoutcatalogo.$promise.then(function(layout) {
    $scope.sucursalonlineImagen = layout.imagenSucursalOnline;
        $scope.logoOficial = layout.logoOficial;
        $scope.listadoMenu = layout.listadoMenu;
        $scope.login=layout.login;
        $scope.email=layout.email;
        $scope.password=layout.password;
        $scope.entrar=layout.entrar;
        $scope.recuperar=layout.recuperar;
        $scope.copyright=layout.copyright;
        $scope.titulo=layout.titulogeneral;
        $scope.addcart=layout.addcart;
        $scope.catalogo=layout.catalogo;
        $scope.categorias=layout.categorias;
        $scope.categorialabel=layout.categorialabel;
    });
    var productoslistado = productosService.getProductos();
    productoslistado.$promise.then(function(productos) {
        
        $scope.productosDestacados = productos.productosDestacados;
        $scope.productos = productos.productos;

    });    
        $scope.celular= LayoutImagenTestService.getStandar();

    var productosCarrito=$cookieStore.get("carrito");
    if(productosCarrito === undefined){
        var productosCarrito = new Array();
        $cookieStore.put('carrito',productosCarrito);
    }
   if(productosCarrito.length==0){    
        var productosCarrito = new Array();
        $cookieStore.put('carrito',productosCarrito);    
    }

    $scope.redirect = function (go, name) {
        //productosService.agregaCarro(id,)
        $state.go(go);
    }
    $scope.redirectdetalle = function (product) {
        console.debug(product);
        //productosService.agregaCarro(id,)
        $state.go('product',{'producto': product.id});
    }
    $scope.redirectcart = function (product) {
        //productosService.agregaCarro(id,)
        $state.go('cart');
    }
  
}