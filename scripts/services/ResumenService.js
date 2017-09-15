'use strict';
//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';

app.service('ResumenService', function  ($resource){
    this.getDatosResumen = function (numero){
        /*var objeto = {
                "numeroprincipal":ccosto,
                "prip":"Nombres",
                "plan":"Apellidos"
            };


        return objeto;*/
        var layoutResource = $resource(REST_SERVICE_URI + '/public/ClienteResumenService/'+numero).get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
    }
   
    return this;
});



