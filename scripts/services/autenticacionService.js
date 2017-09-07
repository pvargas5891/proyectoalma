'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.190:8080/SmeroSecureRESTApi';

app.service('Session', function () {
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


app.service('AuthSharedService', function ($rootScope, $http, $resource, authService, Session,sessionService, store, jwtHelper,md5) {
    // $http.defaults.useXDomain = true;
    return {
        login: function (userName, password, rememberMe, tipoLogin) {

        /*sessionService.rut = '15794539-4';
        sessionService.nombres = 'Pedro';
        sessionService.apellidos = 'Vera';
        sessionService.email = 'pvargas.figueroa@gmail.com';
        sessionService.numeros = ["75687660","567656787"];      
        sessionService.estado=1;
        //return;
        console.debug(sessionService);*/
            var config = {
                ignoreAuthModule: 'ignoreAuthModule',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                // headers: {'Content-Type': 'application/json'}
            };

            /*var config = {
                ignoreAuthModule: 'ignoreAuthModule',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }*/

            //config.headers = config.headers || {};5525627
            //var encodedString = btoa("bill:abc123");
            //config.headers.Authorization = 'Basic '+encodedString;
            //store.set('jwt', null);
            store.set('jwt', null);
            return $http.post(REST_SERVICE_URI + '/authenticate', $.param({
                username: userName,
                password: md5.createHash(password || ''),
                rememberme: rememberMe,
                tipoLogin: tipoLogin
            }), config);
              
        },
        getAccount: function () {
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
        },
        isAuthorized: function (authorizedRoles) {
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
        },
        logout: function () {
            $rootScope.authenticationError = false;
            $rootScope.authenticated = false;
            $rootScope.account = null;
            $http.get(REST_SERVICE_URI + '/logout');
            Session.invalidate();
            authService.loginCancelled();
        }
    };
});

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


