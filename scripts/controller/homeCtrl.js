
app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope,factoryTest){

	$scope.firstName = factoryTest.devuelveNombre();
	$scope.lastName = factoryTest.devuelveApellido();

}