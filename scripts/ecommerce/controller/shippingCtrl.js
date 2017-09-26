
ecommerce.controller('shippingCtrl', shippingCtrl);

function shippingCtrl($scope, $state,LayouHomeService,productosService,$cookieStore) {

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
    $scope.escliente = 0;    
    $scope.nocliente=false;
    $scope.sicliente=false;
    $scope.versiescliente= function(){
        if($scope.escliente==1){
            $scope.nocliente=true;
            $scope.sicliente=false;
        }
        if($scope.escliente==0){
            $scope.nocliente=false;
            $scope.sicliente=true;
        }
    }
    
    $scope.generarpago= function (){
        $cookieStore.put('despacho',"");
        var datosDespacho="";
        var carro = productosService.getCarro();
                //console.debug(carro);
        var carroFinal = [];
        for(var x in carro){
            console.debug(carro[x]);
            var enviar={
                "productoId":carro[x].id,
                "cantidad":carro[x].cantidad
            }
            carroFinal.push(enviar);
        }
        if($scope.escliente==1){
            datosDespacho={
                "escliente":false,
                "codigocliente":"",
                "nombresvalue":$scope.nombresvalue,
                "apellidosvalue":$scope.apellidosvalue,
                "direccionvalue":$scope.direccionvalue,
                "telefonovalue":$scope.telefonovalue,
                "adicionalesvalue":$scope.adicionalesvalue,
                "carro":carroFinal
            }
             $cookieStore.put('despacho',datosDespacho);
             $scope.redirect('payment');
        }else{

            productosService.autenticacionEscliente($scope.usuariologin,$scope.passwordlogin).then(
			function(data, status, headers, config, response) {
					
                if(data.login==""){
                    alert("No se ha podido encontrar tus datos, intenta nuevamente");
                    return;
                }	
                
				var datosDespacho={
                    "escliente":true,
                    "codigocliente":data.login,
                     "nombresvalue":"",
                    "apellidosvalue":"",
                    "direccionvalue":"",
                    "telefonovalue":"",
                    "adicionalesvalue":"",
                    "carro":carroFinal
                }
                $cookieStore.put('despacho',datosDespacho);
                $scope.redirect('payment');

			}, 
			function(data, status, headers, config) {
                alert("No se ha podido encontrar tus datos, intenta nuevamente");
                
				
			  // failure callback
			}
		 );	
           
        }
        
    }                                
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);


    }
}