ecommerce.config(function($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise('/catalog');
        $stateProvider
            .state("catalog", {
                url: "/catalog",
                controller: "catalogCtrl",
                templateUrl: "shop/catalog.html",
                 params: {
                    'cat': 1
                  }
            }).state("cart", {
                url: "/cart",
                controller: "cartCtrl",
                templateUrl: "shop/cart.html"
            }).state("product", {
                url: "/product",
                controller: "productCtrl",
                templateUrl: "shop/product.html",
                params: {
                    'producto': null
                  }
            }).state("shipping", {
                url: "/shipping",
                controller: "shippingCtrl",
                templateUrl: "shop/checkout_shipping.html"
            }).state("payment", {
                url: "/payment",
                controller: "paymentCtrl",
                templateUrl: "shop/checkout_payment.html"
            }).state("confirmation", {
                url: "/confirmation",
                controller: "confirmationCtrl",
                templateUrl: "shop/checkout_confirmation.html"
            });

            

    }).run(function ($rootScope,$state, $location,$cookies, $http, $q, $timeout) {

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