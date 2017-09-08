
app.controller('portadaCtrl', portadaCtrl);

function portadaCtrl($scope, LayouHomeService2,sessionService, LayouHomeService, Session, $state) {

    /*LayouHomeService.getLayout().$promise.then(function (data) {
        console.debug(data);
        //$scope.listadoMenu=data.menues;
    });   */
    var layouthome = LayouHomeService2.getLayout();
    //console.debug(layout);
    layouthome.$promise.then(function(layout) {
        $scope.sucursalonlineImagen = layout.imagenSucursalOnline;
        $scope.logoOficial = layout.logoOficial;
        $scope.listadoMenu = layout.menus;
    });
    $scope.redirect = function (go, name) {
        $scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
    
    var changeLocation = function(url, forceReload) {
		$scope = $scope || angular.element(document).scope();
		if(forceReload || $scope.$$phase) {
			window.location = url;
		}
		else {
			//only use this if you want to replace the history stack
			//$location.path(url).replace();

			//this this if you want to change the URL and add it to the history stack
			$location.path(url);
			$scope.$apply();
		}
    };
}