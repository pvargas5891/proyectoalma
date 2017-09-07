//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.190:8080/SmeroSecureRESTApi';
app.constant('REST_SERVICE_URI',{
    service: 'http://190.82.85.187:8080/SmeroSecureRESTApi'
}).constant('USER_ROLES', {
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

        console.log('Iniciando:');
        // keep user logged in after page refresh
      /*  $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $state.go('login');
            }
        });*/
        
    });