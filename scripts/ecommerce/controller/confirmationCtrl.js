
ecommerce.controller('confirmationCtrl', confirmationCtrl);

function confirmationCtrl($scope, $state) {
    $scope.redirect = function (go, name) {
        //$scope.titulo = (name != "") ? name : layout.texto7;
        $state.go(go);
    }
}