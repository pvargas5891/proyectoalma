'use strict';
myapp.controller('titulo_ctl', function ($scope, $log, LayouHomeService, $http, $resource) {

        $scope.rs_tit = LayouHomeService.getLayout();

    });

myapp.controller('go_login', function ($scope,$state, $log, $http, $resource) {

    console.log("aqui estamos ");

});

