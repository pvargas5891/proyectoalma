
app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope,factoryTest,LayouHomeService2,Session){

	$scope.firstName = factoryTest.devuelveNombre();
	$scope.lastName = factoryTest.devuelveApellido();
	/*LayouHomeService.getLayout().$promise.then(function(data) {
		console.debug(data);
       $scope.listadoMenu=data.menues;
    });*/
    var layout = LayouHomeService2.getLayout();
    console.debug(layout);
    $scope.listadoMenu = layout.menus;
    $scope.fonolineaayuda = layout.texto1;
    $scope.sucursalonline = layout.texto2;
    $scope.cerrarsesion = layout.texto3;
    $scope.bienvenido = layout.texto4;
    $scope.rut = layout.texto5;
    $scope.email = layout.texto6;
    $scope.resumenttucuenta = layout.texto7;
    $scope.centrodecostos = layout.texto8;
    $scope.micuenta = layout.texto9;
}