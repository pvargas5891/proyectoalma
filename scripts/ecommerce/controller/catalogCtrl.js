
ecommerce.controller('catalogCtrl', catalogCtrl);

function catalogCtrl($scope, $state, LayouHomeService,LayoutImagenTestService,productosService) {
   /*LayouHomeService.getLayout().$promise.then(function (data) {
        console.debug(data);
        //$scope.listadoMenu=data.menues;
    });   */
    var layout = LayouHomeService.getLayout();
    console.debug("layout");
    console.debug(layout);
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

    var productos = productosService.getProductos();
    $scope.productosDestacados = productos.productosDestacados;
    $scope.productos = productos.productos;
    $scope.celular= LayoutImagenTestService.getStandar();

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
    /*var changeLocation = function(url, forceReload) {
		$scope = $scope || angular.element(document).scope();
		if(forceReload || $scope.$$phase) {
			window.location = url;
		}
		else {
			//only use this if you want to replace the history stack
			//$location.path(url).replace();

			//this this if you want to change the URL and add it to the history stack
			$location.path(url);
			$scope.$apply();
		}
    };*/
}