
app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope,factoryTest,LayouHomeService2,Session){

	$scope.firstName = factoryTest.devuelveNombre();
	$scope.lastName = factoryTest.devuelveApellido();
    $scope.rutCliente = "15794539-4";
    $scope.emailCliente = "pvargas.figueroa@gmail.com";
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
    $scope.titulo = layout.texto7;
    $scope.centrodecostos = layout.texto8;
    $scope.micuenta = layout.texto9;
    $scope.cerrarSesion = layout.texto10;
    $scope.notification = layout.texto11;
    $scope.centrodecostos = layout.texto12;
    $scope.resumenMisDatos = layout.texto13;
    $scope.resumenFacturacion = layout.texto14;
    $scope.resumenTrafico = layout.texto15;
    $scope.resumenMisPagos = layout.texto16;
    $scope.celular= layout.texto17;
    $scope.prip1= layout.texto18;
    $scope.miplan= layout.texto19;
    $scope.ciclo= layout.texto20;
    $scope.estado= layout.texto21;
    $scope.vencimiento= layout.texto22;
    $scope.totalapagar= layout.texto23;
    $scope.periodo1= layout.texto24;
    $scope.prip2= layout.texto25;
    $scope.voz= layout.texto26;
    $scope.sms= layout.texto27;
    $scope.internet= layout.texto28;
    $scope.periodo2= layout.texto29;
    $scope.saldo= layout.texto30;
    $scope.saldoanterior= layout.texto31;
    $scope.total= layout.texto32;

}