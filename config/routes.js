//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.190:8080/SmeroSecureRESTApi';
app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    user: 'user'
}).config(function($stateProvider, $urlRouterProvider, USER_ROLES){
   $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state("home", {
                url: "/home",
                controller: "homeCtrl",
                templateUrl: "views/home.html",
		        access: {
		            loginRequired: true,
		            authorizedRoles: [USER_ROLES.all]
		        }
            }).state("login", {
                url: "/login",
                controller: "loginCtrl",
                templateUrl: "views/login.html"
            }).state("misdatos", {
                url: "/misdatos",
                controller: "misDatosCtrl",
                templateUrl: "views/misdatos.html"
            }).state("facturacion", {
                url: "/facturacion",
                controller: "facturacionCtrl",
                templateUrl: "views/mifacturacion.html"
            }).state("mitrafico", {
                url: "/mitrafico",
                controller: "miTraficoCtrl",
                templateUrl: "views/mitrafico.html"
            }).state("misservicios", {
                url: "/misservicios",
                controller: "misServiciosCtrl",
                templateUrl: "views/misservicios.html"
            }).state("miequipo", {
                url: "/miequipo",
                controller: "misEquipoCtrl",
                templateUrl: "views/miequipo.html"
            }).state("ccorriente", {
                url: "/ccorriente",
                controller: "cCorrienteCtrl",
                templateUrl: "views/ccorriente.html"
            });

            

    }).run(function ($rootScope,$state, $location,$cookies, $http, AuthSharedService, Session, USER_ROLES, $q, $timeout,LayouHomeService) {

    // $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $rootScope.$on('$routeChangeStart', function (event, next) {
        
                if(next.originalPath === "/login" && $rootScope.authenticated) {
                    event.preventDefault();
                } else if (next.access && next.access.loginRequired && !$rootScope.authenticated) {
                    event.preventDefault();
                    $rootScope.$broadcast("event:auth-loginRequired", {});
                } else if (next.access && !AuthSharedService.isAuthorized(next.access.authorizedRoles)) {
                    event.preventDefault();
                    $rootScope.$broadcast("event:auth-forbidden", {});
                }
            });
        
            $rootScope.$on('$routeChangeSuccess', function (scope, next, current) {
                $rootScope.$evalAsync(function () {
                    $.material.init();
                });
            });
        
            // Call when the the client is confirmed
            $rootScope.$on('event:auth-loginConfirmed', function (event, data) {
                console.log('login confirmed start ' + data);
                console.log(data);
                $rootScope.loadingAccount = false;
                var nextLocation = ($rootScope.requestedUrl ? $rootScope.requestedUrl : "/home");
                var delay = ($location.path() === "/login" ? 1500 : 0);
        
                $timeout(function () {
                    Session.create(data);
                    $rootScope.account = Session;
                    $rootScope.authenticated = true;
                    $location.path(nextLocation).replace();
                }, delay);
        
            });
        
            // Call when the 401 response is returned by the server
            $rootScope.$on('event:auth-loginRequired', function (event, data) {
                if ($rootScope.loadingAccount && data.status !== 401) {
                    $rootScope.requestedUrl = $location.path()
                    $location.path('login.html');
                } else {
                    Session.invalidate();
                    $rootScope.authenticated = false;
                    $rootScope.loadingAccount = false;
                    $location.path('login.html');
                }
            });
        
            // Call when the 403 response is returned by the server
            $rootScope.$on('event:auth-forbidden', function (rejection) {
                $rootScope.$evalAsync(function () {
                    $location.path('/error/403').replace();
                });
            });
        
            // Call when the user logs out
            $rootScope.$on('event:auth-loginCancelled', function () {
                $location.path('/login').replace();
            });
        
            // Get already authenticated user account
            AuthSharedService.getAccount();
        
    });