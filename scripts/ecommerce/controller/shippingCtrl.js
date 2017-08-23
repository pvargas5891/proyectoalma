
ecommerce.controller('shippingCtrl', shippingCtrl);

function shippingCtrl($scope, $state) {
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}