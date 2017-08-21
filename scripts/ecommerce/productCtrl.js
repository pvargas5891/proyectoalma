
ecommerce.controller('productCtrl', productCtrl);

function productCtrl($scope, $state) {
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}