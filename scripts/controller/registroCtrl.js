'use strict';
app.controller('registroCtrl', registroCtrl);

function registroCtrl($rootScope,$scope,LayouHomeService2,LayoutRegistroService,$state){

	var layout = LayouHomeService2.getLayout();
	$scope.logoOficial = layout.logoOficial;

	var layoutLogin = LayoutRegistroService.getLayout();
	

	$scope.title=layoutLogin.title;
	$scope.tituloregistro=layoutLogin.tituloregistro;
	$scope.enviar=layoutLogin.enviar;
	$scope.yatienecuenta=layoutLogin.yatienecuenta;
	$scope.email=layoutLogin.email;
	$scope.username=layoutLogin.username;
	$scope.password=layoutLogin.password;
	
}