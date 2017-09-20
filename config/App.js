var app = angular.module('Alma', 
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

	app.constant('REST_SERVICE_URI',{
    service: 'http://190.82.85.187:8080/SmeroSecureRESTApi'
});

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';