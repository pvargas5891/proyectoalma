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
                "texto33":"Ver Detalles",
                "texto34":"Prip",
                "texto35":"Prip",
                "texto36":"Prip",
                "menus": ["Mis Datos","Facturación","Mi Trafico","Mis Pagos"],
                "iconosMenu": ["Mis Datos","Facturación","Mi Trafico","Mis Pagos"],
                "imagenSucursalOnline": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAUAAA/+EDKWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0I3NzAxRTEwRUJCMTFFNTlFMDQ5RUI0M0FERjc1NTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0I3NzAxRTIwRUJCMTFFNTlFMDQ5RUI0M0FERjc1NTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQjc3MDFERjBFQkIxMUU1OUUwNDlFQjQzQURGNzU1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQjc3MDFFMDBFQkIxMUU1OUUwNDlFQjQzQURGNzU1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUG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",
                "logoOficial": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAABMCAYAAADN5z08AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEzQjgzNEFCNDlBNjExRTdCODBGRUMwQ0NCNzlFOEQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEzQjgzNEFDNDlBNjExRTdCODBGRUMwQ0NCNzlFOEQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTNCODM0QTk0OUE2MTFFN0I4MEZFQzBDQ0I3OUU4RDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTNCODM0QUE0OUE2MTFFN0I4MEZFQzBDQ0I3OUU4RDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6wYwecAAANc0lEQVR42uxdQXLjOg5F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"
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


