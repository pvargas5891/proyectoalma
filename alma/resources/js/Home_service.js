'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';



myapp.service('LayouHomeService', function ($rootScope, $log, $resource, $http, store, jwtHelper) {

    //$http.defaults.headers.common.token  = store.get('jwt');

    return {
        getLayout: function () {

            var layoutResource = $resource(REST_SERVICE_URI + '/public/layout').get({});
            
            return layoutResource;

        }
    }

});




