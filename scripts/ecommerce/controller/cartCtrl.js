
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

        $scope.carro = productosService.getCarro();
        //console.debug($scope.carro);192.168.3.117

        if($scope.carro.length==0){
            $state.go('catalog');
        }
        var totalfinal=0;
        for(var producto in $scope.carro){
            totalfinal+=$scope.carro[producto].total;
        }

        $scope.imagen = LayoutImagenTestService.getStandar();
        $scope.subtotalval = totalfinal;
        $scope.totalval = totalfinal;
        /*
            var productoslist = productosService.getCarro();
        console.debug(productoslist);
        var totalfinal=0;
        for(var productos in productoslist){
            console.debug(productos);
            producto=productoslist[productos];
            producto.$promise.then(function(data) {
                    var total=data.precio;
                    total=total.replace("$","");
                    total=total.replace(".","");
                    total=total.trim();
                
                    var productosCarroVisualtmp={
                        "id":data.id,
                        "name":data.name,
                        "precio":data.precio,
                        "descripcion":data.descripcion,
                        "imagen":data.imagen,
                        "cantidad":productos[1],
                        "total":total*productos[1]
                    }

                    totalfinal=parseInt(totalfinal)+parseInt(total*productos[1]);
                    $scope.subtotalval=totalfinal;
                    $scope.totalval = totalfinal;
            });    
        } 
        */
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
    $scope.vaciarCarro = function (){
        var productosCarrito = new Array();
        $cookieStore.put('carrito',productosCarrito);  
        $scope.redirect('catalog');
    }
    $scope.menos = function (id){
       console.debug(id); 

       //productosService.cambiarCantidad(id,$scope.cantidadText);
        var productosCarrito=$cookieStore.get("carrito");
        var nuevocarrito=new Array();
        for (var x=0;x< productosCarrito.length;x++){
            var productos=productosCarrito[x];
            if(productos[0].id==id){
               productos[1]=productos[1]-1;
            }
            nuevocarrito.push(productos);
        }
        $cookieStore.put("carrito",nuevocarrito);

       $scope.carro = productosService.getCarro();
        var totalfinal=0;
        for(var producto in $scope.carro){
            totalfinal+=$scope.carro[producto].total;
        }
        $scope.imagen = LayoutImagenTestService.getStandar();
        $scope.subtotalval = totalfinal;
        $scope.totalval = totalfinal;
    }
    $scope.mas = function (id){
       console.debug(id); 

       //productosService.cambiarCantidad(id,$scope.cantidadText);
        var productosCarrito=$cookieStore.get("carrito");
        var nuevocarrito=new Array();
        for (var x=0;x< productosCarrito.length;x++){
            var productos=productosCarrito[x];
            if(productos[0].id==id){
               productos[1]=productos[1]+1;
            }
            nuevocarrito.push(productos);
        }
        $cookieStore.put("carrito",nuevocarrito);

       $scope.carro = productosService.getCarro();
        var totalfinal=0;
        for(var producto in $scope.carro){
            totalfinal+=$scope.carro[producto].total;
        }
        $scope.imagen = LayoutImagenTestService.getStandar();
        $scope.subtotalval = totalfinal;
        $scope.totalval = totalfinal;
    }
    $scope.eliminarDelCarro = function (id){

        var productosCarrito=$cookieStore.get("carrito");
        var nuevocarrito=new Array();
        for (var x=0;x< productosCarrito.length;x++){
            var productos=productosCarrito[x];

            if(productos[0].id!=id){
              nuevocarrito.push(productos);
            }
            
        }
        $cookieStore.put("carrito",nuevocarrito);

        $scope.carro = productosService.getCarro();

        if($scope.carro.length==0){    
            $scope.redirect('catalog');
            }

        var totalfinal=0;
        for(var producto in $scope.carro){
            totalfinal+=$scope.carro[producto].total;
        }

        $scope.imagen = LayoutImagenTestService.getStandar();
        $scope.subtotalval = totalfinal;
        $scope.totalval = totalfinal;
    }

    
}