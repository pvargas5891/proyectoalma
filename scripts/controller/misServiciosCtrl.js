'use strict';
app.controller('misServiciosCtrl', misServiciosCtrl);

function misServiciosCtrl($rootScope,$scope,factoryTest,LayouHomeService,Session){
	$scope.bolsas=true;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=false;
	$scope.historicoroaming=false;

$scope.bolsastab=function(){
	$scope.bolsas=true;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=false;
	$scope.historicoroaming=false;
}
$scope.bolsashistoricastab=function(){
	$scope.bolsas=false;
	$scope.bolsashistoricas=true;
	$scope.ventaroaming=false;
	$scope.historicoroaming=false;
}
$scope.ventaroamingtab=function(){
	$scope.bolsas=false;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=true;
	$scope.historicoroaming=false;
}
$scope.historicoroamingtab=function(){
	$scope.bolsas=false;
	$scope.bolsashistoricas=false;
	$scope.ventaroaming=false;
	$scope.historicoroaming=true;
}

}