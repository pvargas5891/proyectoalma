
ecommerce.controller('confirmationCtrl', confirmationCtrl);

function confirmationCtrl($scope, $state,LayouHomeService,productosService, $cookieStore) {
    
    var confirmacionlayout = LayouHomeService.getLayout();
    confirmacionlayout.$promise.then(function(layout) {
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
    });
    
    $scope.carro = productosService.getCarro();
        var totalfinal=0;
        for(var producto in $scope.carro){
            totalfinal+=$scope.carro[producto].total;
        }
        $scope.subtotalval = totalfinal;
        $scope.totalval = totalfinal;

   
    var despacho= $cookieStore.get('despacho');
    productosService.generarDespacho(despacho,				
				function(response) {                                     
					console.debug(response);
                    //alert(response.data.descRetorno);
                    var productosCarrito = new Array();
                    $cookieStore.put('carrito',productosCarrito);  
                },
                function(e) {
                     
                });
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}