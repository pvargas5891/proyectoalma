var ecommerce = angular.module('ecommerce', 
	[
	'ngResource', 
	'ui.router', 
	'swaggerUi', 
	'http-auth-interceptor', 
	'ngAnimate', 
	'angular-spinkit', 
	'angular-md5', 
	'angular-storage', 
	'angular-jwt',
	'ngCookies'
	]);

ecommerce.constant('REST_SERVICE_URI',{
    service: 'http://192.168.3.117:8080/SmeroSecureRESTApi'
    //service: 'http://190.82.85.187:8080/SmeroSecureRESTApi'
    //service: 'http://192.168.0.97:8080/SmeroSecureRESTApi'
});

//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';