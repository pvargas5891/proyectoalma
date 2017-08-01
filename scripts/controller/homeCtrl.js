
app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope,factoryTest,LayouHomeService,Session){

	$scope.firstName = factoryTest.devuelveNombre();
	$scope.lastName = factoryTest.devuelveApellido();
	LayouHomeService.getLayout().$promise.then(function(data) {
       $scope.listadoMenu=data.menues;
    });
}