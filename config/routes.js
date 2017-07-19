app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    user: 'user'
}).config(function($routeProvider, USER_ROLES){
        $routeProvider
            .when("/home", {
                url: "/home",
                controller: "homeCtrl",
                templateUrl: "views/home.html",
		        access: {
		            loginRequired: true,
		            authorizedRoles: [USER_ROLES.all]
		        }
            }).when("/login", {
                url: "/login",
                controller: "loginCtrl",
                templateUrl: "views/login.html"
            })
            .otherwise({redirectTo:'/login'});

    }).run(function ($rootScope, $location, $http, AuthSharedService, Session, USER_ROLES, $q, $timeout,LayouHomeService) {

    // $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

        console.log('Iniciando:');
        
		});