'use strict';
//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.190:8080/SmeroSecureRESTApi';
app.service('MiEquipoService', function  ($resource,REST_SERVICE_URI){
    this.getDatos = function (numero){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/getDatosMiEquipo/'+numero).get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
       /* var objeto = {
                "planvalue":"BAM XL",
                "bajadavalue":"15 Mps",
                "subidavalue":"3 Mps",
                "preciovalue":"$25.000.-",
                "caracteristicasvalue":"Aqui cualquier es texto",
                "pinvalue":"1234",
                "pukvalue":"4321"
            };


        return objeto;*/
    }
    return this;
});



