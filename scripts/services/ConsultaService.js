'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';



app.service('LayouHomeService', function ($rootScope, $log, $resource, $http, store, jwtHelper) {

    //$http.defaults.headers.common.token  = store.get('jwt');

    return {
        getLayout: function () {

            var layoutResource = $resource(REST_SERVICE_URI + '/public/layout').get({});
            
            return layoutResource;

        }
    }

});
app.service('LayouHomeService2', function  (){
    this.getLayout = function (){
        var objeto = {
                "texto1":"Fono Línea de ayuda",
                "texto2":"Sucursal Online",
                "texto3":"Cerrar Sesión",
                "texto4":"Bienvenido",
                "texto5":"Rut",
                "texto6":"Email",
                "texto7":"Resumen de tu cuenta",
                "texto8":"Centros de costos",
                "texto9":"Mi Cuenta",
                "texto10":"Cerrar Sesion",
                "texto11":"NOTIFICACIONES",
                "texto12":"Centros de costos y líneas consultadas",
                "texto13":"Mis Datos",
                "texto14":"Facturación",
                "texto15":"Mi Tráfico",
                "texto16":"Mis Pagos",
                "texto17":"N° Celular",
                "texto18":"N° Prip",
                "texto19":"Mi Plan",
                "texto20":"Ciclo",
                "texto21":"Estado",
                "texto22":"Vencimiento",
                "texto23":"Total a Pagar",
                "texto24":"Período",
                "texto25":"Prip",
                "texto26":"Voz",
                "texto27":"SMS",
                "texto28":"Internet",
                "texto29":"Período",
                "texto30":"Saldo",
                "texto31":"Saldo anterior",
                "texto32":"Total",
                "texto33":"Prip",
                "texto34":"Prip",
                "texto35":"Prip",
                "texto36":"Prip",
                "menus": ["Mis Datos","Facturación","Mi Trafico","Mis Pagos"],
                "iconosMenu": ["Mis Datos","Facturación","Mi Trafico","Mis Pagos"],
                
             };
        return objeto;
    }
    return this;
});
app.service('Session', function (LayouHomeService) {
    this.create = function (data) {

        this.id = data.id;
        this.token = data.token;
        this.login = data.login;
        this.firstName = data.nombre;
        this.lastName = data.apellido;
        this.email = data.correo;
        this.userRoles = [];
        angular.forEach(data.segUsuarioAutoridads, function (value, key) {
            this.push(value.nombre);
        }, this.userRoles);
    };
    this.invalidate = function () {
        this.id = null;
        this.login = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.userRoles = null;
    };
    this.setToken = function (token) {
        this.token = token
    };
    this.getToken = function () {
        return this.token;
    };

    return this;
});


app.service('AuthSharedService', AuthSharedService);


    function AuthSharedService ($rootScope, $http, $resource, authService, Session, store, jwtHelper) {
    // $http.defaults.useXDomain = true;
    
        this.login = function (data,successCallback, errorCallback) {

            var path = REST_SERVICE_URI + '/authenticate';
            var encodedString = btoa("bill:abc123");
            // config.headers.Authorization = 'Basic '+encodedString;
            var req = {
                method: 'POST',
                url: path,
                ignoreAuthModule: 'ignoreAuthModule',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                    'Authorization': 'Basic '+encodedString
                },
                data: $.param(data)
            };
            return $http(req).then(successCallback, errorCallback);

            /*var config = {
                ignoreAuthModule: 'ignoreAuthModule',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                // headers: {'Content-Type': 'application/json'}
            };

            // config.headers = config.headers || {};
            // var encodedString = btoa("bill:abc123");
            // config.headers.Authorization = 'Basic '+encodedString;
            store.set('jwt', null);

            $http.post(REST_SERVICE_URI + '/authenticate', $.param(data), config)
                .success(function (data, status, headers, config, response) {
                    console.log('autenticacion OK config');
                    console.log(config);
                    console.log('Cookie END');
                    console.log(headers);
                    console.log('head');
                    console.log(data);
                    store.set('jwt', data.token);
                    console.log('obteniendo del store');
                    console.log(store.get('jwt'));


                    authService.loginConfirmed(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Error post');
                    console.log(data);
                    console.log('dta');
                    $rootScope.authenticationError = true;
                    Session.invalidate();
                });*/
        };

        this.getAccount = function (data, successCallback, errorCallback) {
            $rootScope.loadingAccount = true;
            console.log('obteniendo del store');
            console.log(store.get('jwt'));
            var config = {
                method: 'GET',
                url: REST_SERVICE_URI + '/security/account',
                headers: {'token': ''+ store.get('jwt')}
            };

            console.log('llamando a getAccount:');
            $http(config)
            .then(function (response) {
                        console.log('getAccount:');
                        console.log(response.data);
                        authService.loginConfirmed(response.data);
                    });
        };

        this.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                if (authorizedRoles == '*') {
                    return true;
                }
                authorizedRoles = [authorizedRoles];
            }
            var isAuthorized = false;
            angular.forEach(authorizedRoles, function (authorizedRole) {
                var authorized = (!!Session.login &&
                Session.userRoles.indexOf(authorizedRole) !== -1);
                if (authorized || authorizedRole == '*') {
                    isAuthorized = true;
                }
            });
            return isAuthorized;
        };

        this.logout = function () {
            $rootScope.authenticationError = false;
            $rootScope.authenticated = false;
            $rootScope.account = null;
            $http.get(REST_SERVICE_URI + '/logout');
            Session.invalidate();
            authService.loginCancelled();
        };

 }

app.service('HomeService', function ($rootScope, $log, $resource, store, jwtHelper, $http) {

    $http.defaults.headers.common.token = store.get('jwt');

    return {
        getTechno: function () {
            var userResource = $resource( '/resources/json/techno.json', {}, {
                query: {method: 'GET', params: {}, isArray: true}
            });
            return userResource.query();
        }
    }
});


app.service('UsersService', function ($rootScope, $log, $resource, $http, store, jwtHelper) {

    $http.defaults.headers.common.token = store.get('jwt');

    return {
        getAll: function () {

            var userResource = $resource( REST_SERVICE_URI + '/users', {
                query: {method: 'GET' , params: {}, isArray: true}
            });

            return userResource.query();

            // $http.get('http://127.0.0.1:8080/SecureRESTApiWithBasicAuthentication/users',{
            //     headers: {'token': 'token:'+tokenSesion}})
            //     .then(function (response) {
            //         // authService.loginConfirmed(response.data);
            //         console.log('tirando la data a la consola');
            //         console.log(response.data);
            //         console.log('fin data');
            //         return response.data;
            //     });
        }
    }
});


app.service('TokensService', function ($rootScope, $log, $resource, store, jwtHelper, $http) {

    $http.defaults.headers.common.token = store.get('jwt');

    return {
        getAll: function () {
            // var tokensResource = $resource('http://127.0.0.1:8080/SecureRESTApiWithBasicAuthentication/security/tokens', {}, {
            //     query: {method: 'GET', params: {}, isArray: true},
            //     headers: {'token': ''+ store.get('jwt')}
            // });
            // return tokensResource.query();
            var tokensResource = $resource( REST_SERVICE_URI + '/security/tokens', {}, {
                get: {
                    method: 'GET'}
            });

            return tokensResource.query();
        }
    }
});


