'use strict';

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



