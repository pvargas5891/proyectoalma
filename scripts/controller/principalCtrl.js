'use strict';
app.controller('principalCtrl', principalCtrl);

function principalCtrl($rootScope,$scope,factoryTest,LayouHomeService,Session){

	$scope.firstName = factoryTest.devuelveNombre();
	$scope.lastName = factoryTest.devuelveApellido();
	LayouHomeService.getLayout().$promise.then(function(data) {
       $scope.listadoMenu=data.menues;
    });
	//$scope.listadoMenu = resources.get('menues');
	//console.debug($scope.listadoMenu);
}